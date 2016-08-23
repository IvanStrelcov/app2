import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class UserCreateService {
  constructor(private http: Http){}

  addUser(user: User) {
    return this.http.post(`http://localhost:3000/users/`, user)
                    .map(user => user.json());
  }
}
