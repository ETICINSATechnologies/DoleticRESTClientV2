import {Component, OnInit} from '@angular/core';

import {TicketService} from "../../services/ticket.service";

import {Ticket} from "../../entities/ticket";
import {TicketStatus} from "../../entities/ticket-status"; //présent pour tester
import {User} from "../../entities/user"; //présent pour tester

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
    //this.ticketService.getAllByStatus(0).then(openedTickets => this.openedTickets = openedTickets);
    //this.ticketService.getAllByStatus(1).then(workingTickets => this.workingTickets = workingTickets);
    this.openedTickets = [
      new Ticket(1, 'un ticket', 'Contenu de ticket', null, new TicketStatus(1,'open'), new User('tcadet')),
      new Ticket(4, 'encore un autre ticket', 'Ticket', null, new TicketStatus(4,'open'), new User('Jean-Jacques'))
    ];
    this.workingTickets = [
      new Ticket(2, 'un autre ticket', 'Contenu de ticket', null, new TicketStatus(2,'work'), new User('marie')),
      new Ticket(3, 'encore un ticket', 'Per hoc minui studium suum existimans Paulus, ut erat in conplicandis negotiis artifex dirus, unde ei Catenae inditum est cognomentum, vicarium ipsum eos quibus praeerat adhuc defensantem ad sortem periculorum communium traxit. et instabat ut eum quoque cum tribunis et aliis pluribus ad comitatum imperatoris vinctum perduceret: quo percitus ille exitio urgente abrupto ferro eundem adoritur Paulum. et quia languente dextera, letaliter ferire non potuit, iam districtum mucronem in proprium latus inpegit. hocque deformi genere mortis excessit e vita iustissimus rector ausus miserabiles casus levare multorum.', null, new TicketStatus(3,'work'), new User('pierre'))
    ];
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


 

