import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {UPLOAD_DIRECTIVES} from 'ng2-uploader/ng2-uploader';
import {FILE_UPLOAD_DIRECTIVES, FileUploader} from 'ng2-file-upload';

import { UserCreateComponent } from './user-create.component';
import { UserCreateService } from './user-create.service';

@NgModule({
  imports: [ BrowserModule,
             FormsModule ],
  declarations: [ UserCreateComponent, UPLOAD_DIRECTIVES, FILE_UPLOAD_DIRECTIVES ],
  providers: [ UserCreateService ],
  exports: [ UserCreateComponent ]
})
export class UserCreateModule {}
