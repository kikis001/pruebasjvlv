import { Component, OnInit } from '@angular/core';
import { WinnerService } from '../../services/winner.service';
import { Winner } from '../../interface/Winner';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-winners',
  standalone: true,
  imports: [
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatDividerModule
  ],
  templateUrl: './winners.component.html',
  styleUrl: './winners.component.css',
})
export class WinnersComponent implements OnInit {
  constructor(private winnerService: WinnerService) {}

  winners: Winner[] = [];

  ngOnInit(): void {
    this.winnerService.getWinners().subscribe((res: Winner[]) => {
      this.winners = res;
    });
  }
}
