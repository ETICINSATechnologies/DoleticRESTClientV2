import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Response } from '@angular/http';

import { ContactActionType } from '../entities/contact-action-type';
import { NewContactActionType } from '../entities/contact-action-type.new';
import { API_SERVER } from '../app.constants';

import 'rxjs/add/operator/toPromise';
import {AuthenticationService} from "./auth.service";

@Injectable()
export class ContactActionTypeService {
    constructor(private http: Http, private authService: AuthenticationService){}

    private contact_action_typeApiUrl = API_SERVER.grc + 'contact_action_type';
    private headers = this.authService.getHeaders();

    private handleError(error: any): Promise<any> {
        console.error('An error occurred in ContactActionTypeService: ', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    create(contact_action_type: NewContactActionType):Promise<ContactActionType> {
        return this.http
            .post(this.contact_action_typeApiUrl, JSON.stringify(contact_action_type), {headers: this.headers})
            .toPromise()
            .then(res =>{
                return res.json().contact_action_type as ContactActionType;
            })
            .catch(this.handleError);
    }

    remove(contact_action_typeId:string):Promise<Response>{
        return this.http
            .delete(this.contact_action_typeApiUrl+"/"+contact_action_typeId, {headers: this.headers})
            .toPromise()
            .catch(this.handleError);
    }

    getById(contact_action_typeId:string):Promise<ContactActionType>{
        return this.http
            .get(this.contact_action_typeApiUrl + "/" + contact_action_typeId, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json().contact_action_type as ContactActionType;
            })
            .catch(this.handleError);
    }

    update(contact_action_type: ContactActionType): Promise<ContactActionType>{
        return this.http
            .post(this.contact_action_typeApiUrl + "/" + contact_action_type.id, {
                label: contact_action_type.label,
                detail: contact_action_type.description
            }, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().contact_action_type as ContactActionType;
            })
            .catch(this.handleError);
    }

    getByLabel(contact_action_typeLabel: string): Promise<ContactActionType>{
        return this.http
            .get(this.contact_action_typeApiUrl + "/" + contact_action_typeLabel, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().contact_action_type as ContactActionType;
            })
            .catch(this.handleError);
    }

    getAll(): Promise<Array<ContactActionType>>{
        return this.http
            .get(this.contact_action_typeApiUrl + "s", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().contact_action_types as Array<ContactActionType>;
            })
            .catch(this.handleError);
    }
}