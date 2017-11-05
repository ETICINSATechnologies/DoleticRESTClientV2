import { TicketType } from './ticket-type';
import { TicketStatus } from './ticket-status';

export class NewTicket{
    constructor(
    	public type?:TicketType,
    	public status?:TicketStatus,
        public title?:string,
        public content?:string
    ){

    }
}