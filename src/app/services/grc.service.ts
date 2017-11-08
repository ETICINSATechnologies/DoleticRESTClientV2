/**
 * Created by Julien on 08/11/2017.
 */
import { Injectable } from '@angular/core';
import { Http} from '@angular/http';

import {GRCRights} from "../entities/grc-rights";

import { API_SERVER } from '../app.constants';

import {AuthenticationService} from "./auth.service";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GRCService {
    constructor(private http: Http, private authService: AuthenticationService){}

    private grcApiUrl = API_SERVER.grc + '/rights';
    private headers = this.authService.getHeaders();

    private handleError(error: any): Promise<any> {
        console.error('An error occurred in GRCService: ', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    /*

     */
    getCurrentUserRights(): Promise<GRCRights>{
        return this.http
            .get(this.grcApiUrl, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().right as GRCRights;
            })
            .catch(this.handleError);
    }
}