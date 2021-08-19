import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../common/User';

const baseUrl = ' http://localhost:3000/users';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {

    return this.http.get<User[]>(baseUrl);

  }
  getUserById(id:any): Observable<User> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  deleteUserById(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`)
  }
  findByEmail(email: any): Observable<User[]> {
    return this.http.get<User[]>(`${baseUrl}?id=${email}`);
  }


}
