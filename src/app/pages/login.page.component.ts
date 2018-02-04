import {Component} from '@angular/core';
import {LoginService} from '../services/login.service';
import {LoginID} from '../entities/loginID';
import {Router} from "@angular/router";

@Component({
    selector: 'doletic-login',
    templateUrl: '../html/login.page.component.html',
    providers: [LoginService]
})

export class LoginPageComponent {
    identifiants: LoginID = new LoginID('', '');
    constructor(private loginService: LoginService, private router: Router) {}
    login() {
      this.loginService.login(this.identifiants)
      this.loginService.login(this.identifiants)
        .then(res => {
          this.router.navigate(['/dashboard']);
        })
        .catch();
    }
}
