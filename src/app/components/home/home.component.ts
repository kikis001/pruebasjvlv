import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { Room } from '../../interface/Room';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    CommonModule,
    MatIconModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(
    private roomService: RoomService,
    private router: Router,
  ) {}

  rooms: Room[] = [];

  ngOnInit(): void {
    this.roomService.getRooms().subscribe((res: Room[]) => {
      this.rooms = res;
    });
  }

  addTeam(idRoom: string) {
    // const id = this.cookieServer.get('id');
    const id = localStorage.getItem('id')
    this.roomService.addTeamRoom(idRoom, id).subscribe(
      (res) => {
        this.router.navigate(['questionnaire', idRoom]);
      },
      (err) => {
        alert(err.error.message);
      }
    )
  }
}
