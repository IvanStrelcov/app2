import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { UsersListService } from './users-list.service';

// import template from './users-list.html';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.html'
})
export class UsersListComponent {
  users: any;
  user: any;
  searchName: any;
  constructor(private UsersListService: UsersListService,
              private router: Router) {}

  ngOnInit() {
    this.searchName = '';
    this.getUsers();
  }

  getUsers() {
    this.UsersListService.getUsers().subscribe((users: any) => {
      this.users = users;
    })
  }

  onSearch(name) {
    if (this.searchName === name) return;
    if (!name) {
      this.searchName = '';
      this.getUsers();
    } else {
      this.searchName = name;
      this.UsersListService.getUsersByName(name).subscribe((users: any) => {
        this.users = users;
      });
    }
  }
};
