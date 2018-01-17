import {Component, OnInit} from '@angular/core';

import {TicketService} from "../../services/ticket.service";

import {Ticket} from "../../entities/ticket";
import {DataOpenedTickets, DataWorkingTickets} from "./tickets-to-solve-fake-data";

@Component({
    selector: 'doletic-tickets-to-solve',
    templateUrl: '../../html/tickets-to-solve.component.html',
    providers: [TicketService]
})

export class TicketsToSolveComponent implements OnInit{
  openedTickets: Ticket[];
  workingTickets: Ticket[];

  constructor(private ticketService: TicketService){}
  
  ngOnInit(): void {
    /*this.ticketService.getAllByStatus('1').then(openedTickets => this.openedTickets = openedTickets);
    this.ticketService.getAllByStatus('2').then(workingTickets => this.workingTickets = workingTickets);*/
    this.openedTickets = DataOpenedTickets;
    this.workingTickets = DataWorkingTickets;
 }

 workOn(ticket: Ticket): void {
   let index = this.openedTickets.indexOf(ticket, 0);
   if (index > -1) {
      ticket.status.label = 'work';
      /*this.ticketService.update(ticket).then( t => 
      {
        this.workingTickets.push(t);
        this.openedTickets.splice(index, 1);
      });*/
      this.workingTickets.push(ticket);
      this.openedTickets.splice(index, 1);
   }
 }

 resolve(ticket: Ticket): void {
   let index = this.workingTickets.indexOf(ticket, 0);
   if (index > -1) {
      ticket.status.label = 'done';
      //this.ticketService.update(ticket).then( () => this.workingTickets.splice(index, 1));
      this.workingTickets.splice(index, 1);
   }
   
 }
};


 

