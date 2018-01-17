import {Ticket} from "../../entities/ticket";
import {TicketStatus} from "../../entities/ticket-status"; 
import {User} from "../../entities/user"; 

export const DataOpenedTickets: Ticket[] = 
  [
      new Ticket(1, 'un ticket', 'Contenu de ticket', null, new TicketStatus(1,'open'), new User('tcadet')),
      new Ticket(4, 'encore un autre ticket', 'Ticket', null, new TicketStatus(4,'open'), new User('Jean-Jacques'))
  ];
export const DataWorkingTickets: Ticket[] =  
 [
      new Ticket(2, 'un autre ticket', 'Contenu de ticket', null, new TicketStatus(2,'work'), new User('marie')),
      new Ticket(3, 'encore un ticket', 'Per hoc minui studium suum existimans Paulus, ut erat in conplicandis negotiis artifex dirus, unde ei Catenae inditum est cognomentum, vicarium ipsum eos quibus praeerat adhuc defensantem ad sortem periculorum communium traxit. et instabat ut eum quoque cum tribunis et aliis pluribus ad comitatum imperatoris vinctum perduceret: quo percitus ille exitio urgente abrupto ferro eundem adoritur Paulum. et quia languente dextera, letaliter ferire non potuit, iam districtum mucronem in proprium latus inpegit. hocque deformi genere mortis excessit e vita iustissimus rector ausus miserabiles casus levare multorum.', null, new TicketStatus(3,'work'), new User('pierre'))
 ];