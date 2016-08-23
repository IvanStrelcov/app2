import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UsersListComponent }  from './users-list.component';
// import { UserComponent } from '../user';
import { SharedModule } from '../shared/shared.module';
import { UsersListService } from './users-list.service';

@NgModule({
  imports: [ BrowserModule, SharedModule ],
  declarations: [ UsersListComponent ],
  providers: [ UsersListService ],
  exports: [ UsersListComponent ]
})
export class UserListModule {}
