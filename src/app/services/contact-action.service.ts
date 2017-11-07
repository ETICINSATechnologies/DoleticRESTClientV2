import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { ContactAction } from '../entities/contact-action';
import { API_SERVER } from '../app.constants';

import 'rxjs/add/operator/toPromise';
import { AuthenticationService } from "./auth.service";

@Injectable()
export class ContactActionActionService {
    constructor(private http: Http, private authService: AuthenticationService) {
    }

    private contactActionApiUrl = API_SERVER.grc + 'contact_action_action';
    private headers = this.authService.getHeaders();

    private handleError(error: any): Promise<any> {
        console.error('An error occurred in ContactActionService: ', error);  // for demo purposes only
        return Promise.reject(error.message || error);
    }

    create(contact_action_action: ContactAction): Promise<ContactAction> {
        return this.http
            .post(this.contactActionApiUrl, contact_action_action, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json().contact_action as ContactAction;
            })
            .catch(this.handleError);
    }

    remove(contact_actionId: string): Promise<Response> {
        return this.http
            .delete(this.contactActionApiUrl + "/" + contact_actionId, {headers: this.headers})
            .toPromise()
            .catch(this.handleError);
    }

    getById(contact_actionId: string): Promise<ContactAction> {
        return this.http
            .get(this.contactActionApiUrl + "/" + contact_actionId, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json().contact_action as ContactAction;
            })
            .catch(this.handleError);
    }

    update(contact_action: ContactAction): Promise<ContactAction> {
        return this.http
            .post(this.contactActionApiUrl + "/" + contact_action.id, contact_action, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json().contact_action as ContactAction;
            })
            .catch(this.handleError);
    }

    getAll(): Promise<Array<ContactAction>> {
        return this.http
            .get(this.contactActionApiUrl + "s", {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json().contact_actions as Array<ContactAction>;
            })
            .catch(this.handleError);
    }


    getAllByContact(contactId: string): Promise<Array<ContactAction>> {
        return this.http
            .get(this.contactActionApiUrl + "s/contact/" + contactId, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json().contact_actions as Array<ContactAction>;
            })
            .catch(this.handleError);
    }

    getAllByCurrentUser(): Promise<Array<ContactAction>> {
        return this.http
            .get(this.contactActionApiUrl + "s/current", {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json().contact_actions as Array<ContactAction>;
            })
            .catch(this.handleError);
    }

    getAllByProspector(prospectorId: string): Promise<Array<ContactAction>> {
        return this.http
            .get(this.contactActionApiUrl + "s/prospector/" + prospectorId, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json().contact_actions as Array<ContactAction>;
            })
            .catch(this.handleError);
    }

    getAllByType(typeId: string): Promise<Array<ContactAction>> {
        return this.http
            .get(this.contactActionApiUrl + "s/type/" + typeId, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json().contact_actions as Array<ContactAction>;
            })
            .catch(this.handleError);
    }
}