import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Contact } from '../entities/contact';
import { API_SERVER } from '../app.constants';

import 'rxjs/add/operator/toPromise';
import { AuthenticationService } from "./auth.service";

@Injectable()
export class ContactService {
    constructor(private http: Http, private authService: AuthenticationService) {
    }

    private contactApiUrl = API_SERVER.grc + 'contact';
    private headers = this.authService.getHeaders();

    private handleError(error: any): Promise<any> {
        console.error('An error occurred in ContactService: ', error);  // for demo purposes only
        return Promise.reject(error.message || error);
    }

    create(contact: Contact): Promise<Contact> {
        return this.http
            .post(this.contactApiUrl, contact, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json() as Contact;
            })
            .catch(this.handleError);
    }

    remove(contactId: string): Promise<Response> {
        return this.http
            .delete(this.contactApiUrl + "/" + contactId, {headers: this.headers})
            .toPromise()
            .catch(this.handleError);
    }

    getById(contactId: string): Promise<Contact> {
        return this.http
            .get(this.contactApiUrl + "/" + contactId, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json() as Contact;
            })
            .catch(this.handleError);
    }

    update(contact: Contact): Promise<Contact> {
        return this.http
            .post(this.contactApiUrl + "/" + contact.id, contact, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json() as Contact;
            })
            .catch(this.handleError);
    }

    updateType(contactId: string, typeId: string): Promise<Contact> {
        return this.http
            .post(this.contactApiUrl + "/" + contactId + "/type/" + typeId, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json() as Contact;
            })
            .catch(this.handleError);
    }


    getAll(): Promise<Array<Contact>> {
        return this.http
            .get(this.contactApiUrl + "s", {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json() as Array<Contact>;
            })
            .catch(this.handleError);
    }


    getAllByCreator(creatorId: string): Promise<Array<Contact>> {
        return this.http
            .get(this.contactApiUrl + "s/creator/" + creatorId, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json() as Array<Contact>;
            })
            .catch(this.handleError);
    }

    getAllByCurrentUser(): Promise<Array<Contact>> {
        return this.http
            .get(this.contactApiUrl + "s/current", {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json() as Array<Contact>;
            })
            .catch(this.handleError);
    }

    getAllByFirm(firmId: string): Promise<Array<Contact>> {
        return this.http
            .get(this.contactApiUrl + "s/firm/" + firmId, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json() as Array<Contact>;
            })
            .catch(this.handleError);
    }

    getAllByType(typeId: string): Promise<Array<Contact>> {
        return this.http
            .get(this.contactApiUrl + "s/type/" + typeId, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json() as Array<Contact>;
            })
            .catch(this.handleError);
    }

    getTableData(typeId: string): Promise<any> {
        return this.http
            .get(this.contactApiUrl + "s/type/" + typeId, {headers: this.headers})
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }
}