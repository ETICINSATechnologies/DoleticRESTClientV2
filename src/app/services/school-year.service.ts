import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { SchoolYear } from '../entities/school-year';
import { NewSchoolYear } from '../entities/school-year.new';
import { API_SERVER } from '../app.constants';

import 'rxjs/add/operator/toPromise';
import {AuthenticationService} from "./auth.service";

@Injectable()
export class SchoolYearService {
    constructor(private http: Http, private authService: AuthenticationService){}
    
    private schoolYearApiUrl = API_SERVER.rh + 'year';
    private headers = this.authService.getHeaders();

    private handleError(error: any): Promise<any> {
        console.error('An error occurred in SchoolYearService: ', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    create(schoolYear: NewSchoolYear): Promise<SchoolYear> {
        return this.http
            .post(this.schoolYearApiUrl, schoolYear, {headers: this.headers})
            .toPromise()
            .then(res =>{
                return res.json().year as SchoolYear;
            })
            .catch(this.handleError);
    }

    remove(schoolYearId:string):Promise<Response>{
        return this.http
            .delete(this.schoolYearApiUrl + "/" + schoolYearId, {headers: this.headers})
            .toPromise()
            .catch(this.handleError);
    }

    getById(schoolYearId:string):Promise<SchoolYear>{
        return this.http
            .get(this.schoolYearApiUrl + "/" + schoolYearId, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json().year as SchoolYear;
            })
            .catch(this.handleError);
    }

    update(schoolYear: SchoolYear): Promise<SchoolYear>{
        return this.http
            .post(this.schoolYearApiUrl + "/" + schoolYear.id, schoolYear, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().year as SchoolYear;
            })
            .catch(this.handleError);
    }

    getByYear(schoolYearYear:string):Promise<SchoolYear>{
        return this.http
            .get(this.schoolYearApiUrl + "/" + schoolYearYear, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json().year as SchoolYear;
            })
            .catch(this.handleError);
    }

    getAll():Promise<Array<SchoolYear>>{
        return this.http
            .get(this.schoolYearApiUrl + "s", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().years as Array<SchoolYear>;
            })
            .catch(this.handleError);
    }
}