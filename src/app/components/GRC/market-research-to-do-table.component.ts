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
  spareColumns = {prospector: 5, name: 6, mail: 7, prospectorId: 8};

  constructor(protected service: ContactService) 
  {
    super(service, "3");
  }

  loadData(d: any): void
  {
    for(let i = d.length-1; i>=0; i--)
    {
        const nameAndMail: string = d[i].fullName + " " + d[i].email; 
        this.data.push(
          [
            nameAndMail, d[i].phone, d[i].cellPhone,
            d[i].firm?d[i].firm.name:"", d[i].role, d[i].creator?d[i].creator.fullName:"",
            d[i].fullName, d[i].email, d[i].creator?d[i].creator.id:"",
            d[i].id
          ]);
    } 
  }

 
}
