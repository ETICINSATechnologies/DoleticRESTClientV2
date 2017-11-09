/**
 * Created by julien on 03/11/17.
 */
import { Injectable } from '@angular/core';
import { Http} from '@angular/http';

import {AmendmentType} from "../entities/amendment-type";

import { API_SERVER } from '../app.constants';

import {AuthenticationService} from "./auth.service";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AmendmentTypeService {
    constructor(private http: Http, private authService: AuthenticationService){}

    private amendmentTypeApiUrl = API_SERVER.kernel + 'amendment_type';
    private amendmentTypesApiUrl = API_SERVER.kernel + 'amendment_types';
    private headers = this.authService.getHeaders();

    private handleError(error: any): Promise<any> {
        console.error('An error occurred in AmendmentTypeService: ', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    create(amendmentType: AmendmentType):Promise<AmendmentType> {
        return this.http
            .post(this.amendmentTypeApiUrl, amendmentType, {headers: this.headers})
            .toPromise()
            .then(res =>{
                return res.json().amendmentType as AmendmentType;
            })
            .catch(this.handleError);
    }

    remove(amendmentTypeId:string):Promise<Response>{
        return this.http
            .delete(this.amendmentTypeApiUrl+"/"+amendmentTypeId, {headers: this.headers})
            .toPromise()
            .catch(this.handleError);
    }

    getById(amendmentTypeId:string):Promise<AmendmentType>{
        return this.http
            .get(this.amendmentTypeApiUrl + "/" + amendmentTypeId, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json().amendmentType as AmendmentType;
            })
            .catch(this.handleError);
    }

    update(amendmentType: AmendmentType): Promise<AmendmentType>{
        return this.http
            .post(this.amendmentTypeApiUrl + "/" + amendmentType.id, amendmentType, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().amendmentType as AmendmentType;
            })
            .catch(this.handleError);
    }

    getByLabel(amendmentTypeLabel: string): Promise<AmendmentType>{
        return this.http
            .get(this.amendmentTypeApiUrl + "/" + amendmentTypeLabel, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().amendmentType as AmendmentType;
            })
            .catch(this.handleError);
    }

    getAll(): Promise<Array<AmendmentType>>{
        return this.http
            .get(this.amendmentTypesApiUrl, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().amendmentTypes as Array<AmendmentType>;
            })
            .catch(this.handleError);
    }
}