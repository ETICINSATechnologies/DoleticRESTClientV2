import { User } from './user';
import {TicketType} from "./ticket-type";
import {TicketStatus} from "./ticket-status";

export class Ticket{
    constructor(
        public id?:number,
        public title?:string,
        public content?:string,
        public type?:TicketType,
        public status?:TicketStatus,
        public author?:User,
        public archived?:boolean,
        public archivedSince?:string,
        public creationDate?:string
    ){

    }
}