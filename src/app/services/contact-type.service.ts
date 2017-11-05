import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Response } from '@angular/http';

import { ContactType } from '../entities/contact-type';
import { NewContactType } from '../entities/contact-type.new';
import { API_SERVER } from '../app.constants';

import 'rxjs/add/operator/toPromise';
import {AuthenticationService} from "./auth.service";

@Injectable()
export class ContactTypeService {
    constructor(private http: Http, private authService: AuthenticationService){}

    private contact_typeApiUrl = API_SERVER.grc + 'contact_type';
    private headers = this.authService.getHeaders();

    private handleError(error: any): Promise<any> {
        console.error('An error occurred in ContactTypeService: ', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    create(contact_type: NewContactType):Promise<ContactType> {
        return this.http
            .post(this.contact_typeApiUrl, JSON.stringify(contact_type), {headers: this.headers})
            .toPromise()
            .then(res =>{
                return res.json().contact_type as ContactType;
            })
            .catch(this.handleError);
    }

    remove(contact_typeId:string):Promise<Response>{
        return this.http
            .delete(this.contact_typeApiUrl+"/"+contact_typeId, {headers: this.headers})
            .toPromise()
            .catch(this.handleError);
    }

    getById(contact_typeId:string):Promise<ContactType>{
        return this.http
            .get(this.contact_typeApiUrl + "/" + contact_typeId, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json().contact_type as ContactType;
            })
            .catch(this.handleError);
    }

    update(contact_type: ContactType): Promise<ContactType>{
        return this.http
            .post(this.contact_typeApiUrl + "/" + contact_type.id, {
                label: contact_type.label,
                detail: contact_type.detail
            }, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().contact_type as ContactType;
            })
            .catch(this.handleError);
    }

    getByLabel(contact_typeLabel: string): Promise<ContactType>{
        return this.http
            .get(this.contact_typeApiUrl + "/" + contact_typeLabel, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().contact_type as ContactType;
            })
            .catch(this.handleError);
    }

    getAll(): Promise<Array<ContactType>>{
        return this.http
            .get(this.contact_typeApiUrl + "s", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().contact_types as Array<ContactType>;
            })
            .catch(this.handleError);
    }
}