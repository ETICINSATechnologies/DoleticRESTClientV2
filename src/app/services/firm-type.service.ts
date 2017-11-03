import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { FirmType } from '../entities/firm-type';
import { NewFirmType } from '../entities/firm-type.new';
import { API_SERVER } from '../app.constants';

import 'rxjs/add/operator/toPromise';
import {AuthenticationService} from "./auth.service";

@Injectable()
export class FirmTypeService {
    constructor(private http: Http, private authService: AuthenticationService){}
    
    private firmTypeApiUrl = API_SERVER.grc + 'firm_type';
    private headers = this.authService.getHeaders();

    private handleError(error: any): Promise<any> {
        console.error('An error occurred in FirmTypeService: ', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    create(firmType: NewFirmType): Promise<FirmType> {
        return this.http
            .post(this.firmTypeApiUrl, firmType, {headers: this.headers})
            .toPromise()
            .then(res =>{
                return res.json().firm_type as FirmType;
            })
            .catch(this.handleError);
    }

    remove(firmTypeId:string):Promise<void>{
        return this.http
            .delete(this.firmTypeApiUrl + "/" + firmTypeId, {headers: this.headers})
            .toPromise()
            .catch(this.handleError);
    }

    getById(firmTypeId:string):Promise<FirmType>{
        return this.http
            .get(this.firmTypeApiUrl + "/" + firmTypeId, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json().firm_type as FirmType;
            })
            .catch(this.handleError);
    }

    update(firmType: FirmType): Promise<FirmType>{
        return this.http
            .post(this.firmTypeApiUrl + "/" + firmType.id, firmType, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().firm_type as FirmType;
            })
            .catch(this.handleError);
    }

    getByLabel(firmTypeLabel:string):Promise<FirmType>{
        return this.http
            .get(this.firmTypeApiUrl + "/" + firmTypeLabel, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json().firm_type as FirmType;
            })
            .catch(this.handleError);
    }

    getAll(): Promise<Array<FirmType>>{
        return this.http
            .get(this.firmTypeApiUrl + "s", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().firm_types as Array<FirmType>;
            })
            .catch(this.handleError);
    }
}