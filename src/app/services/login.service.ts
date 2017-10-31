import { Injectable } from '@angular/core';

import { Http } from '@angular/http';


import { API_SERVER, LOGIN_CONFIG } from '../app.constants';

import { LoginID } from '../entities/loginID';

import 'rxjs/add/operator/map'

import {AuthenticationService} from "./auth.service";

@Injectable()

export class LoginService {
    private OAuthTokenURL = API_SERVER.oauth + 'token';
    private URLParameters = "?" +
        "client_id=" + LOGIN_CONFIG.clientId + "&" +
        "client_secret=" + LOGIN_CONFIG.secretId + "&" +
        "grant_type=" + LOGIN_CONFIG.grantType + "&" +
        "redirect_uri=" + LOGIN_CONFIG.redirectURL;

    constructor(private http: Http, private authService: AuthenticationService) { }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    login(identifiants: LoginID):Promise<>{
        return this.http
            .get(this.OAuthTokenURL + this.URLParameters +
                "&" + "username=" + identifiants.username +
                "&" + "password=" + identifiants.password)
            .toPromise()
            .then(res => {
                this.authService.setAccessToken(res.json().access_token);
                this.authService.setTokenType("Bearer");
                this.authService.setLogged(true);
            })
            .catch(this.handleError);
    };



}