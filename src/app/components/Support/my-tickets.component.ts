import {Component, OnInit} from '@angular/core';

import {TicketService} from "../../services/ticket.service";

import {Ticket} from "../../entities/ticket";
import {TicketStatus} from "../../entities/ticket-status"; //présent pour tester

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
    this.myTickets = [
    new Ticket(1, 'un ticket', 'Contenu de ticket', null, new TicketStatus(1,'open')),
    new Ticket(2, 'un autre ticket', 'Contenu de ticket', null, new TicketStatus(2,'work')),
    new Ticket(3, 'encore un ticket', 'Per hoc minui studium suum existimans Paulus, ut erat in conplicandis negotiis artifex dirus, unde ei Catenae inditum est cognomentum, vicarium ipsum eos quibus praeerat adhuc defensantem ad sortem periculorum communium traxit. et instabat ut eum quoque cum tribunis et aliis pluribus ad comitatum imperatoris vinctum perduceret: quo percitus ille exitio urgente abrupto ferro eundem adoritur Paulum. et quia languente dextera, letaliter ferire non potuit, iam districtum mucronem in proprium latus inpegit. hocque deformi genere mortis excessit e vita iustissimus rector ausus miserabiles casus levare multorum.', null, new TicketStatus(3,'done')),
    new Ticket(4, 'un autre ticket', 'Ticket étrange', null, new TicketStatus(4,'undefined'))
    ];
    
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


 

