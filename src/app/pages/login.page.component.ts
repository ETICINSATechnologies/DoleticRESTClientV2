import {Component} from '@angular/core';
import {LoginService} from '../services/login.service';
import {LoginID} from '../entities/loginID';

@Component({
    selector: 'doletic-login',
    templateUrl: '../html/login.page.component.html',
    providers: [LoginService]
})

export class LoginPageComponent {
    identifiants: LoginID = new LoginID('', '');
    constructor(private loginService: LoginService) {}
}