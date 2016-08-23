import { NgModule }            from '@angular/core';
import { BrowserModule }       from '@angular/platform-browser';
import { HttpModule }          from '@angular/http';

import { AppComponent }        from './components/app/app.component';
import { HeaderComponent }     from './components/header/header.component';

import { UserListModule }      from './components/users-list';
import { UserCreateModule }    from './components/user-create';
import { UserProfileModule }   from './components/user-profile';

import { SharedModule }   from './components/shared/shared.module';

import { routes,
         routing,
         appRoutingProviders } from './app.routes';

@NgModule({
  imports: [      BrowserModule,
                  UserListModule,
                  HttpModule,
                  UserCreateModule,
                  UserProfileModule,
                  routing,
                  SharedModule.forRoot()],
  declarations: [ AppComponent,
                  HeaderComponent ],
  providers: [    appRoutingProviders ],
  bootstrap: [    AppComponent ]
})
export class AppModule {}
