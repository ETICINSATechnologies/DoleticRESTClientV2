import {Component, OnInit} from '@angular/core';

import {TicketService} from "../../services/ticket.service";

import {Ticket} from "../../entities/ticket";
import {DataTicket} from "./my-tickets-fake-data";

@Component({
    selector: 'doletic-my-tickets',
    templateUrl: '../../html/my-tickets.component.html',
    providers: [TicketService]
})

export class MyTicketsComponent implements OnInit{
  myTickets: Ticket[];

  constructor(private ticketService: TicketService){}
  
  ngOnInit(): void {
    //this.ticketService.getAllByCurrentUser().then(myTickets => this.myTickets = myTickets);
    this.myTickets = DataTicket;
    
    for(let i:number = 0; i<this.myTickets.length; ++i) {
      switch (this.myTickets[i].status.label) {
        case "open":
          this.myTickets[i].status.label = 'red';
          this.myTickets[i].status.detail = "Votre problème n'a pas encore été pris en charge.";
          break;
        case "work":
          this.myTickets[i].status.label = 'blue';
          this.myTickets[i].status.detail = 'Votre problème est en cours de résolution.';
          break;  
        case "done":
          this.myTickets[i].status.label = 'green';
          this.myTickets[i].status.detail = 'Votre problème est résolu.';
          break;   
        default:
          this.myTickets[i].status.label = 'black';
          this.myTickets[i].status.detail = "L'état de ce ticket est étrange, merci de prévenir les développeurs.";
          break;
      }      
    }

  }
};


 

