import { Injectable } from '@angular/core';
import { Http} from '@angular/http';

import { Division } from '../entities/division';
import { NewDivision } from '../entities/division.new';
import { API_SERVER } from '../app.constants';

import 'rxjs/add/operator/toPromise';
import {AuthenticationService} from "./auth.service";

@Injectable()
export class DivisionService {
    constructor(private http: Http, private authService: AuthenticationService){}

    private divisionApiUrl = API_SERVER.kernel + 'division';
    private headers = this.authService.getHeaders();

    private handleError(error: any): Promise<any> {
        console.error('An error occurred in DivisionService: ', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    create(division: NewDivision):Promise<Division> {
        return this.http
            .post(this.divisionApiUrl, JSON.stringify(division), {headers: this.headers})
            .toPromise()
            .then(res =>{
                return res.json().division as Division;
            })
            .catch(this.handleError);
    }

    remove(divisionId:string):Promise<>{
        return this.http
            .delete(this.divisionApiUrl+"/"+divisionId, {headers: this.headers})
            .toPromise()
            .catch(this.handleError);
    }

    getById(divisionId:string):Promise<Division>{
        return this.http
            .get(this.divisionApiUrl + "/" + divisionId, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json().division as Division;
            })
            .catch(this.handleError);
    }

    update(division: Division): Promise<Division>{
        return this.http
            .post(this.divisionApiUrl + "/" + division.id, {
                label: division.label,
                detail: division.detail
            }, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().division as Division;
            })
            .catch(this.handleError);
    }

    disable(divisionId: string): Promise<Division>{
        return this.http
            .post(this.divisionApiUrl + "/" + divisionId + "/disable", {}, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().division as Division;
            })
            .catch(this.handleError);
    }

    enable(divisionId: string): Promise<Division>{
        return this.http
            .post(this.divisionApiUrl + "/" + divisionId + "/enable", {}, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().division as Division;
            })
            .catch(this.handleError);
    }

    getByLabel(divisionLabel: string): Promise<Division>{
        return this.http
            .get(this.divisionApiUrl + "/" + divisionLabel, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().division as Division;
            })
            .catch(this.handleError);
    }

    getAll(): Promise<Array<Division>>{
        return this.http
            .get(this.divisionApiUrl + "s", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().divisions as Array<Division>;
            })
            .catch(this.handleError);
    }

    getAllEnabled(): Promise<Array<Division>>{
        return this.http
            .get(this.divisionApiUrl + "s/enabled", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().divisions as Array<Division>;
            })
            .catch(this.handleError);
    }
}