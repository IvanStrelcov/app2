import { Component, OnInit } from '@angular/core';
// import { ROUTER_DIRECTIVES, Routes, Router } from '@angular/router';

import { HeaderComponent } from '../header';
import { UsersListComponent } from '../users-list';
// import template from './app.html';
@Component({
  selector: 'app',
  templateUrl: 'src/components/app/app.html'
})

export class AppComponent implements OnInit {
  constructor(){}
  ngOnInit(){}
}
