import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/User';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  private urlUser = 'https://business-back-17f67211a6dc.herokuapp.com/users'

  async getOne(id: string): Promise<Observable<User>> {
    return await this.http.get<User>(`${this.urlUser}/${id}`)
  }
}
