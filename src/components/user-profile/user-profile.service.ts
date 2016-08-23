import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class UserProfileService {
  constructor(private http: Http){}

  getUser(id) {
    return this.http.get(`http://localhost:3000/users/${id}`)
                    .map(user => user.json());
  }

  removeUser(id) {
    return this.http.delete(`http://localhost:3000/users/${id}`)
                    .map(res => res.json());
  }
}
