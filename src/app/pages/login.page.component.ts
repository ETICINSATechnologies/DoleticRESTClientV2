import {Component} from '@angular/core';
import {LoginService} from '../services/login.service';
import {LoginID} from '../entities/loginID';
import {Router} from "@angular/router";
import {AlertService} from '../services/alert.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'doletic-login',
    templateUrl: '../html/login.page.component.html',
    providers: [LoginService]
})

export class LoginPageComponent {
    identifiants: LoginID = new LoginID('', '');

    loginForm: FormGroup = new FormGroup({
        email : new FormControl(),
        password : new FormControl()
    });

    loading = false;
    constructor(private loginService: LoginService, private router: Router, private alertService: AlertService) {}

    login() {
        this.loading = true;
        this.loginService.login(this.identifiants)
            .then(res => {
                this.router.navigate(['/dashboard']);
            })
            .catch(
                error =>{
                    error = error.json();
                    this.loading = false;
                    if(error.error == 'invalid_grant'){
                        this.alertService.error("Identifiants incorrectes", "Combinaison pseudo/mot de passe incorrecte");
                    }
                    else if(error.error == 'invalid_request'){
                        this.alertService.error("Mauvaise saisie", "Veuillez entrer votre pseudo et votre mot de passe");
                    }
                    else {
                        this.alertService.webmasterAlert();
                    }
                }
            );
    }
}
