/**
 * Created by Julien on 08/11/2017.
 */
import { Injectable } from '@angular/core';
import { Http} from '@angular/http';

import {Right} from "../entities/right";

import { API_SERVER } from '../app.constants';

import {AuthenticationService} from "./auth.service";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class KernelService {
    constructor(private http: Http, private authService: AuthenticationService){}

    private kernelApiUrl = API_SERVER.kernel + '/rights';
    private headers = this.authService.getHeaders();

    private handleError(error: any): Promise<any> {
        console.error('An error occurred in KernelService: ', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    /*

     */
    getCurrentUserRights(): Promise<Right>{
        return this.http
            .get(this.kernelApiUrl, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Right;
            })
            .catch(this.handleError);
    }
}