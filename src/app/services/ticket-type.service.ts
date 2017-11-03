import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

import { TicketType } from '../entities/ticket-type';
import { NewTicketType } from '../entities/ticket-type.new';
import { API_SERVER } from '../app.constants';

import 'rxjs/add/operator/toPromise';
import {AuthenticationService} from "./auth.service";

@Injectable()
export class TicketTypeService {
    constructor(private http: Http, private authService: AuthenticationService){}
    
    private ticketTypeApiUrl = API_SERVER.support + 'ticket_type';
    private headers = this.authService.getHeaders();

    private handleError(error: any): Promise<any> {
        console.error('An error occurred in TicketTypeService: ', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    create(ticketType: NewTicketType): Promise<TicketType> {
        return this.http
            .post(this.ticketTypeApiUrl, JSON.stringify(ticketType), {headers: this.headers})
            .toPromise()
            .then(res =>{
                return res.json().ticket_type as TicketType;
            })
            .catch(this.handleError);
    }

    remove(ticketTypeId:string):Promise<Response>{
        return this.http
            .delete(this.ticketTypeApiUrl + "/" + ticketTypeId, {headers: this.headers})
            .toPromise()
            .catch(this.handleError);
    }

    getById(ticketTypeId:string):Promise<TicketType>{
        return this.http
            .get(this.ticketTypeApiUrl + "/" + ticketTypeId, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json().ticket_type as TicketType;
            })
            .catch(this.handleError);
    }

    update(ticketType: TicketType): Promise<TicketType>{
        return this.http
            .post(this.ticketTypeApiUrl + "/" + ticketType.id, {
                label: ticketType.label,
                detail: ticketType.detail,
                enabled: ticketType.enabled
            }, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().ticket_type as TicketType;
            })
            .catch(this.handleError);
    }

    disable(ticketTypeId: string): Promise<TicketType>{
        return this.http
            .post(this.ticketTypeApiUrl + "/" + ticketTypeId + "/disable", {}, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().ticket_type as TicketType;
            })
            .catch(this.handleError);
    }

    enable(ticketTypeId: string): Promise<TicketType>{
        return this.http
            .post(this.ticketTypeApiUrl + "/" + ticketTypeId + "/enable", {}, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().ticket_type as TicketType;
            })
            .catch(this.handleError);
    }

    getByLabel(ticketTypeLabel:string):Promise<TicketType>{
        return this.http
            .get(this.ticketTypeApiUrl + "/" + ticketTypeLabel, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json().ticket_type as TicketType;
            })
            .catch(this.handleError);
    }

    getAll():Promise<Array<TicketType>>{
        return this.http
            .get(this.ticketTypeApiUrl + "s", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().ticket_types as Array<TicketType>;
            })
            .catch(this.handleError);
    }

    getAllEnabled():Promise<Array<TicketType>>{
        return this.http
            .get(this.ticketTypeApiUrl + "s/enabled", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().ticket_types as Array<TicketType>;
            })
            .catch(this.handleError);
    }
}