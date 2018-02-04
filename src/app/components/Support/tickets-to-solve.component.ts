import {Component, OnInit} from '@angular/core';

import {TicketService} from "../../services/ticket.service";
import {TicketStatusService} from "../../services/ticket-status.service";

import {Ticket} from "../../entities/ticket";
import {TicketStatus} from "../../entities/ticket-status";

@Component({
    selector: 'doletic-tickets-to-solve',
    templateUrl: '../../html/tickets-to-solve.component.html',
    providers: [TicketService, TicketStatusService]
})

export class TicketsToSolveComponent implements OnInit{
  ticketStatus: TicketStatus[] = [];
  openedTickets: Ticket[] = [];
  workingTickets: Ticket[] = [];

  constructor(private ticketService: TicketService,
              private ticketStatusService: TicketStatusService)
  {}
  
  ngOnInit(): void {
    this.ticketService.getAllByStatus('1').then(openedTickets => this.openedTickets = openedTickets);
    this.ticketService.getAllByStatus('2').then(workingTickets => this.workingTickets = workingTickets);
    this.ticketStatusService.getAll().then(status => this.ticketStatus = status);
 }

 workOn(ticket: Ticket): void {
   let index = this.openedTickets.indexOf(ticket, 0);
   if (index > -1) {
      ticket.status = this.ticketStatus[1];
      this.ticketService.update(ticket).then( t => 
      {
        this.workingTickets.push(t);
        this.openedTickets.splice(index, 1);
      });
   }
 }

 resolve(ticket: Ticket): void {
   let index = this.workingTickets.indexOf(ticket, 0);
   if (index > -1) {
      ticket.status = this.ticketStatus[2];
      this.ticketService.update(ticket).then( () => this.workingTickets.splice(index, 1));
   }
   
 }
};


 

