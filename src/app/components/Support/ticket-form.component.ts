import {Component, OnInit} from '@angular/core';

import {TicketService} from "../../services/ticket.service";
import {TicketTypeService} from "../../services/ticket-type.service";
import {TicketStatusService} from "../../services/ticket-status.service";

import {Ticket} from "../../entities/ticket";
import {NewTicket} from "../../entities/ticket.new";
import {TicketType} from "../../entities/ticket-type";

@Component({
    selector: 'doletic-ticket-form',
    templateUrl: '../../html/ticket-form.component.html',
    providers: [TicketService, TicketTypeService, TicketStatusService]
})

export class TicketFormComponent implements OnInit{
  ticket: NewTicket;
  ticketTypes: TicketType[] = [];

  constructor(private ticketService: TicketService, 
  			  private ticketTypeService: TicketTypeService,
  			  private ticketStatusService: TicketStatusService)
  {
    this.ticket = new NewTicket();
  }
  
  ngOnInit(): void 
  {
    this.ticketTypeService.getAllEnabled().then(types => this.ticketTypes = types);
    this.ticketStatusService.getAll().then(status => this.ticket.status = status[0])
  }

  submit(): void
  {
  	this.ticketService.create(this.ticket).then( () => 
  		{
  			this.reset();
  		}
  	);
  }

  reset(): void
  {
  	this.ticket.title = this.ticket.type = this.ticket.content = null;
  }

  get diagnostic() { return JSON.stringify(this.ticket); } //TODO supprimer
};


 

