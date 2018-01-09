import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Response } from '@angular/http';

import { ConsultantMembership } from '../entities/consultant-membership';
import { NewConsultantMembership } from '../entities/consultant-membership.new';
import { API_SERVER } from '../app.constants';

import 'rxjs/add/operator/toPromise';
import {AuthenticationService} from "./auth.service";

@Injectable()
export class ConsultantMembershipService {
    constructor(private http: Http, private authService: AuthenticationService){}

    private consultant_membershipApiUrl = API_SERVER.rh + 'consultant_membership';
    private headers = this.authService.getHeaders();

    private handleError(error: any): Promise<any> {
        console.error('An error occurred in ConsultantMembershipService: ', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    create(consultant_membership: NewConsultantMembership):Promise<ConsultantMembership> {
        return this.http
            .post(this.consultant_membershipApiUrl, JSON.stringify(consultant_membership), {headers: this.headers})
            .toPromise()
            .then(res =>{
                return res.json() as ConsultantMembership;
            })
            .catch(this.handleError);
    }

    remove(consultant_membershipId:string):Promise<Response>{
        return this.http
            .delete(this.consultant_membershipApiUrl+"/"+consultant_membershipId, {headers: this.headers})
            .toPromise()
            .catch(this.handleError);
    }

    getById(consultant_membershipId:string):Promise<ConsultantMembership>{
        return this.http
            .get(this.consultant_membershipApiUrl + "/" + consultant_membershipId, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json() as ConsultantMembership;
            })
            .catch(this.handleError);
    }

    update(consultant_membership: ConsultantMembership): Promise<ConsultantMembership>{
        return this.http
            .post(this.consultant_membershipApiUrl + "/" + consultant_membership.id, {
                user: consultant_membership.user,
                startDate: consultant_membership.startDate,
                socialNumber: consultant_membership.socialNumber,
                feePaid: consultant_membership.feePaid,
                formFilled: consultant_membership.formFilled,
                certificateGiven: consultant_membership.certificateGiven,
                ribGiven: consultant_membership.ribGiven,
                idGiven: consultant_membership.idGiven
            }, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as ConsultantMembership;
            })
            .catch(this.handleError);
    }

    getAll(): Promise<Array<ConsultantMembership>>{
        return this.http
            .get(this.consultant_membershipApiUrl + "s", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Array<ConsultantMembership>;
            })
            .catch(this.handleError);
    }

    getAllById(consultant_membershipId:string): Promise<Array<ConsultantMembership>>{
        return this.http
            .get(this.consultant_membershipApiUrl + "s/user/" + consultant_membershipId, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Array<ConsultantMembership>;
            })
            .catch(this.handleError);
    }
}