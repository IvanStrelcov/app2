import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserProfileService } from './user-profile.service';
import { RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile.component';
import { FormsModule } from '@angular/forms';
// import { User } from '../../user.ts';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [ BrowserModule, FormsModule, RouterModule, CommonModule ],
  declarations: [ UserProfileComponent ],
  providers: [ UserProfileService ],
  exports: [ UserProfileComponent ]
})
export class UserProfileModule {}
