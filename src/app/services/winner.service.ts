import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Winner } from '../interface/Winner';

@Injectable({
  providedIn: 'root'
})
export class WinnerService {
  constructor(private http: HttpClient) { }

  private urlWinner = 'https://business-back-17f67211a6dc.herokuapp.com'

  getWinners(): Observable<Winner[]> {
    return this.http.get<Winner[]>(`${this.urlWinner}/winner`)
  }
}
