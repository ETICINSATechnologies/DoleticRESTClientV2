import { Component } from '@angular/core';

import { TableTemplate } from '../../entities/table-template'

import { ContactService } from '../../services/contact.service'

@Component({
  selector: 'doletic-market-research-to-do-table',
  templateUrl: '../../html/market-research-to-do-table.component.html',
  providers: [ContactService]
})
export class MarketResearchToDoTableComponent extends TableTemplate {
  headers: string[] = ["Nom/Email", "Téléphone", "Mobile", "Société", "Rôle", "Assigné à"]; // + Nom, Email, prospectorId, Actions (id) 
  loopedColumns: number[] = [1, 2, 3, 4];
  spareColumns = {name: 6, mail: 7, prospectorId: 8};

  constructor(protected service: ContactService) 
  {
    super(service, "3");
  }

  loadData(d: any): void
  {
    for(let i = d.length-1; i>=0; i--)
    {
        const name: string = d[i].firstName + " " + d[i].lastName;
        const nameAndMail: string = name + " " + d[i].email; 
        const prospectorName: string = d[i].prospector.firstName + " " + d[i].prospector.lastName;
        this.data.push(
          [
            nameAndMail, d[i].phone, d[i].cellPhone,
            d[i].firm.name, d[i].role, prospectorName,
            name, d[i].email, d[i].prospector.id,
            d[i].id
          ]);
    } 
  }

 
}
