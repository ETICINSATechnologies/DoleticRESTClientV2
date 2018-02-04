import {Component, OnInit} from '@angular/core';

import {TicketService} from "../../services/ticket.service";
import {TicketStatusService} from "../../services/ticket-status.service";

import {Ticket} from "../../entities/ticket";
import {TicketStatus} from "../../entities/ticket-status";

@Component({
    selector: 'doletic-my-tickets',
    templateUrl: '../../html/my-tickets.component.html',
    providers: [TicketService, TicketStatusService]
})

export class MyTicketsComponent implements OnInit{
  myTickets: Ticket[] = [];
  ticketStatus: TicketStatus[] = [];

  constructor(private ticketService: TicketService,
              private ticketStatusService: TicketStatusService)
  {}
  
  ngOnInit(): void 
  {
    this.ticketService.getAllByCurrentUser().then(myTickets => this.myTickets = myTickets);
    this.ticketStatusService.getAll().then(status => 
    {
      this.ticketStatus = status;
      for (let aTicket of this.myTickets)
      {
        this.setColorAndDetails(aTicket);
      }
    });
  }

  setColorAndDetails(ticket: Ticket): void
  {       
    switch (ticket.status.id) 
    {
          case this.ticketStatus[0].id:
            ticket.status.label = 'red';
            ticket.status.detail = "Votre problème n'a pas encore été pris en charge.";
            break;
          case this.ticketStatus[1].id:
            ticket.status.label = 'blue';
            ticket.status.detail = 'Votre problème est en cours de résolution.';
            break;  
          case this.ticketStatus[2].id:
            ticket.status.label = 'green';
            ticket.status.detail = 'Votre problème est résolu.';
            break;   
          default:
            ticket.status.label = 'black';
            ticket.status.detail = "L'état de ce ticket est étrange, merci de prévenir les développeurs.";
            break;
    }      
  }
};


 

