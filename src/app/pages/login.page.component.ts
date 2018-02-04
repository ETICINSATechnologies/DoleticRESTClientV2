import {Component} from '@angular/core';
import {LoginService} from '../services/login.service';
import {LoginID} from '../entities/loginID';
import {Router} from "@angular/router";
import {SessionService} from "../services/session.service";

@Component({
    selector: 'doletic-login',
    templateUrl: '../html/login.page.component.html',
    providers: [LoginService, SessionService]
})

export class LoginPageComponent {
    identifiants: LoginID = new LoginID('', '');
    constructor(private loginService: LoginService,private sessionService: SessionService, private router: Router) {}
    login() {
      this.loginService.login(this.identifiants)
      this.loginService.login(this.identifiants)
        .then(res => {
          this.router.navigate(['/dashboard']);
          window.sessionStorage.setItem('logged', "true");
        })
        .catch();
    }
}
