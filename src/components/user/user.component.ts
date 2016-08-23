import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

const template = require('./user.html');
@Component({
  selector: 'user',
  template
})
export class UserComponent implements OnInit{
  @Input()
  user: User;
  constructor(private router: Router){}
  ngOnInit(){
  }

  gotoDetail(user) {
    this.router.navigate(['/users', this.user.id]);
  }
};