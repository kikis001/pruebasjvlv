import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quiz, Room } from '../../interface/Room';
import { RoomService } from '../../services/room.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-questionnaire',
  standalone: true,
  imports: [
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    CommonModule,
    MatIconModule,
    MatRadioModule,
    FormsModule,
  ],
  templateUrl: './questionnaire.component.html',
  styleUrl: './questionnaire.component.css',
})
export class QuestionnaireComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private roomServices: RoomService,
    private router: Router,
  ) {}

  quiz: Quiz | null = null;
  selectedOptions: number[] = [];
  roomId: string | null = '';
  isOptionsSelected: boolean = false;

  ngOnInit(): void {
    const idRoom = this.route.snapshot.paramMap.get('id');
    this.roomId = idRoom;
    console.log(this.roomId);
    this.roomServices.getOne(idRoom).subscribe((quiz: Room) => {
      this.quiz = quiz.quiz;
    });
  }

  sumbit() {
    if (this.selectedOptions.length < 5) {
      alert('Regresa! No terminaste el formulario');
      return;
    }
    const idTeam = localStorage.getItem('id')
    this.roomServices
      .submitAnswers(this.roomId, idTeam, this.selectedOptions)
      .subscribe(
        (res) => {
          alert('Bien hecho. Espera los resultados');
          this.router.navigate(['home']);
        },
        (err) => {
          alert('Espera los resultados');
          this.router.navigate(['home']);
        }
      );
  }
}
