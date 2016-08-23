import { Component, OnInit } from '@angular/core';
// import { ROUTER_DIRECTIVES, Routes, Router } from '@angular/router';

import { HeaderComponent } from '../header';
import { UsersListComponent } from '../users-list';
const template = require('./app.html');
@Component({
  selector: 'app',
  template
})

export class AppComponent implements OnInit {
  constructor(){}
  ngOnInit(){}
}
