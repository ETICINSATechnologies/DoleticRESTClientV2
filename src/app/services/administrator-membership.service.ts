import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

import {AdministratorMembership} from "../entities/administrator-membership";

import { API_SERVER } from '../app.constants';

import {AuthenticationService} from "./auth.service";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AdministratorMembershipService {
    constructor(private http: Http, private authService: AuthenticationService){}

    private administratorMembershipApiUrl = API_SERVER.rh + 'administrator_membership';
    private administratorMembershipsApiUrl = API_SERVER.kernel + 'administrator_memberships';
    private headers = this.authService.getHeaders();

    private handleError(error: any): Promise<any> {
        console.error('An error occurred in AdministratorMembershipService: ', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    create(administratorMembership : AdministratorMembership):Promise<AdministratorMembership> {
        return this.http
            .post(this.administratorMembershipApiUrl, administratorMembership, {headers: this.headers})
            .toPromise()
            .then(res =>{
                return res.json() as AdministratorMembership;
            })
            .catch(this.handleError);
    }

    remove(administratorMembershipId:string):Promise<Response>{
        return this.http
            .delete(this.administratorMembershipApiUrl+"/"+administratorMembershipId, {headers: this.headers})
            .toPromise()
            .catch(this.handleError);
    }

    getById(administratorMembershipId:string):Promise<AdministratorMembership>{
        return this.http
            .get(this.administratorMembershipApiUrl + "/" + administratorMembershipId, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json() as AdministratorMembership;
            })
            .catch(this.handleError);
    }

    update(administratorMembership : AdministratorMembership): Promise<AdministratorMembership>{
        return this.http
            .post(this.administratorMembershipApiUrl + "/" + administratorMembership.id, administratorMembership,{headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as AdministratorMembership;
            })
            .catch(this.handleError);
    }

    getByUserId(administratorMembershipId : string): Promise<AdministratorMembership>{
        return this.http
            .get(this.administratorMembershipsApiUrl + "/" + administratorMembershipId, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as AdministratorMembership;
            })
            .catch(this.handleError);
    }

    getAll(): Promise<Array<AdministratorMembership>>{
        return this.http
            .get(this.administratorMembershipsApiUrl, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Array<AdministratorMembership>;
            })
            .catch(this.handleError);
    }
}