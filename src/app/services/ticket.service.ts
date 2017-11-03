import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

import { TicketStatus } from '../entities/ticket-status';
import { TicketType } from '../entities/ticket-type';
import { Ticket } from '../entities/ticket';
import { NewTicket } from '../entities/ticket.new';
import { API_SERVER } from '../app.constants';

import 'rxjs/add/operator/toPromise';
import {AuthenticationService} from "./auth.service";

@Injectable()
export class TicketService {
    constructor(private http: Http, private authService: AuthenticationService){}
    
    private ticketApiUrl = API_SERVER.support + 'ticket';
    private headers = this.authService.getHeaders();

    private handleError(error: any): Promise<any> {
        console.error('An error occurred in TicketService: ', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    create(ticket: NewTicket): Promise<Ticket> {
        return this.http
            .post(this.ticketApiUrl, JSON.stringify(ticket), {headers: this.headers})
            .toPromise()
            .then(res =>{
                return res.json().ticket as Ticket;
            })
            .catch(this.handleError);
    }

    remove(ticketId:string):Promise<Response>{
        return this.http
            .delete(this.ticketApiUrl + "/" + ticketId, {headers: this.headers})
            .toPromise()
            .catch(this.handleError);
    }

    getById(ticketId:string):Promise<Ticket>{
        return this.http
            .get(this.ticketApiUrl + "/" + ticketId, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json().ticket as Ticket;
            })
            .catch(this.handleError);
    }

    update(ticket: Ticket): Promise<Ticket>{
        return this.http
            .post(this.ticketApiUrl + "/" + ticket.id, {
                title: ticket.title,
                content: ticket.content,
                type: ticket.type,
                status: ticket.status,
                author: ticket.author,
                archived: ticket.archived,
                archivedSince: ticket.archivedSince,
                creationDate: ticket.creationDate
            }, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().ticket as Ticket;
            })
            .catch(this.handleError);
    }

    getAll():Promise<Array<Ticket>>{
        return this.http
            .get(this.ticketApiUrl + "s", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().tickets as Array<Ticket>;
            })
            .catch(this.handleError);
    }

    getAllByAuthor(authorId:string):Promise<Array<Ticket>>{
        return this.http
            .get(this.ticketApiUrl + "s/author/" + authorId, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().tickets as Array<Ticket>;
            })
            .catch(this.handleError);
    }

    getAllByCurrentUser():Promise<Array<Ticket>>{
        return this.http
            .get(this.ticketApiUrl + "s/current", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().tickets as Array<Ticket>;
            })
            .catch(this.handleError);
    }

    getAllByStatus(statusId:string):Promise<Array<Ticket>>{
        return this.http
            .get(this.ticketApiUrl + "s/status/" + statusId, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().tickets as Array<Ticket>;
            })
            .catch(this.handleError);
    }

    getAllByType(typeId:string):Promise<Array<Ticket>>{
        return this.http
            .get(this.ticketApiUrl + "s/type/" + typeId, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().tickets as Array<Ticket>;
            })
            .catch(this.handleError);
    }
}