import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http";

import { AppComponent } from './app.component';

import {AuthenticationService} from "./services/auth.service";
import {DivisionService} from "./services/division.service";
import {LoginService} from "./services/login.service";
import {GenderService} from "./services/gender.service";
import {CountryService} from "./services/country.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
      AuthenticationService,
      DivisionService,
      LoginService,
      GenderService,
      CountryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
