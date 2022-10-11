import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import{RouterModule,Routes} from '@angular/router';
import { ViewairlineComponent } from './viewairline/viewairline.component';
import { PassangerComponent } from './passanger/passanger.component';
const appRoutes:Routes=[
  {
    path:"",component:ViewairlineComponent
  },
  {
    path:"passanger",component:PassangerComponent
  },
  
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ViewairlineComponent,
    PassangerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
