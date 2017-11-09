import { Injectable } from '@angular/core';
import { Http} from '@angular/http';

import {NewGender} from "../entities/gender.new";
import {Gender} from "../entities/gender";

import { API_SERVER } from '../app.constants';

import {AuthenticationService} from "./auth.service";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GenderService {
    constructor(private http: Http, private authService: AuthenticationService){}

    private genderApiUrl = API_SERVER.kernel + 'gender';
    private headers = this.authService.getHeaders();

    private handleError(error: any): Promise<any> {
        console.error('An error occurred in GenderService: ', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    create(gender: NewGender):Promise<Gender> {
        return this.http
            .post(this.genderApiUrl, JSON.stringify(gender), {headers: this.headers})
            .toPromise()
            .then(res =>{
                return res.json().gender as Gender;
            })
            .catch(this.handleError);
    }

    remove(genderId:string):Promise<Response>{
        return this.http
            .delete(this.genderApiUrl+"/"+genderId, {headers: this.headers})
            .toPromise()
            .catch(this.handleError);
    }

    getById(genderId:string):Promise<Gender>{
        return this.http
            .get(this.genderApiUrl + "/" + genderId, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json().gender as Gender;
            })
            .catch(this.handleError);
    }

    update(gender: Gender): Promise<Gender>{
        return this.http
            .post(this.genderApiUrl + "/" + gender.id, {
                label: gender.label,
                detail: gender.detail
            }, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().gender as Gender;
            })
            .catch(this.handleError);
    }

    disable(genderId: string): Promise<Gender>{
        return this.http
            .post(this.genderApiUrl + "/" + genderId + "/disable", {}, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().gender as Gender;
            })
            .catch(this.handleError);
    }

    enable(genderId: string): Promise<Gender>{
        return this.http
            .post(this.genderApiUrl + "/" + genderId + "/enable", {}, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().gender as Gender;
            })
            .catch(this.handleError);
    }

    getByLabel(genderLabel: string): Promise<Gender>{
        return this.http
            .get(this.genderApiUrl + "/" + genderLabel, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().gender as Gender;
            })
            .catch(this.handleError);
    }

    getAll(): Promise<Array<Gender>>{
        return this.http
            .get(this.genderApiUrl + "s", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().genders as Array<Gender>;
            })
            .catch(this.handleError);
    }

    getAllEnabled(): Promise<Array<Gender>>{
        return this.http
            .get(this.genderApiUrl + "s/enabled", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().genders as Array<Gender>;
            })
            .catch(this.handleError);
    }
}