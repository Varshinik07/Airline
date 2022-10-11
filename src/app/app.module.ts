import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import{RouterModule,Routes} from '@angular/router';
import { ViewairlineComponent } from './viewairline/viewairline.component';
const appRoutes:Routes=[
  {
    path:"",component:ViewairlineComponent
  },
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ViewairlineComponent
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
