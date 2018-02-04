import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { TicketStatus } from '../entities/ticket-status';
import { NewTicketStatus } from '../entities/ticket-status.new';
import { API_SERVER } from '../app.constants';

import 'rxjs/add/operator/toPromise';
import {AuthenticationService} from "./auth.service";

@Injectable()
export class TicketStatusService {
    constructor(private http: Http, private authService: AuthenticationService){}
    
    private ticketStatusApiUrl = API_SERVER.support + 'ticket_status';
    private headers = this.authService.getHeaders();

    private handleError(error: any): Promise<any> {
        console.error('An error occurred in TicketStatusService: ', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    create(ticketStatus: NewTicketStatus): Promise<TicketStatus> {
        return this.http
            .post(this.ticketStatusApiUrl, ticketStatus, {headers: this.headers})
            .toPromise()
            .then(res =>{
                return res.json() as TicketStatus;
            })
            .catch(this.handleError);
    }

    remove(ticketStatusId:string):Promise<Response>{
        return this.http
            .delete(this.ticketStatusApiUrl + "/" + ticketStatusId, {headers: this.headers})
            .toPromise()
            .catch(this.handleError);
    }

    getById(ticketStatusId:string):Promise<TicketStatus>{
        return this.http
            .get(this.ticketStatusApiUrl + "/" + ticketStatusId, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json() as TicketStatus;
            })
            .catch(this.handleError);
    }

    update(ticketStatus: TicketStatus): Promise<TicketStatus>{
        return this.http
            .post(this.ticketStatusApiUrl + "/" + ticketStatus.id, ticketStatus, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as TicketStatus;
            })
            .catch(this.handleError);
    }

    getByLabel(ticketStatusLabel:string):Promise<TicketStatus>{
        return this.http
            .get(this.ticketStatusApiUrl + "/" + ticketStatusLabel, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json() as TicketStatus;
            })
            .catch(this.handleError);
    }

    getAll():Promise<Array<TicketStatus>>{
        return this.http
            .get(this.ticketStatusApiUrl + "es", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Array<TicketStatus>;
            })
            .catch(this.handleError);
    }
}