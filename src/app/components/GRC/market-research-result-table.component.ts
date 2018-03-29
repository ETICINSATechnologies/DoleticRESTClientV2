import { Component } from '@angular/core';

import { TableTemplate } from '../../entities/table-template'

import { ContactService } from '../../services/contact.service'

@Component({
  selector: 'doletic-market-research-result-table',
  templateUrl: '../../html/market-research-result-table.component.html',
  providers: [ContactService]
})
export class MarketResearchResultTableComponent extends TableTemplate {
  headers: string[] = ["Nom/Email", "Société", "Rôle", "Proch. prospection", "Coordonnées", "Assigné à"]; // + name, mail, prospectorId, Actions (id) 
  loopedColumns: number[] = [1, 2, 3, 4];
  spareColumns = {prospector: 5, name: 6, mail: 7, prospectorId: 8};

  constructor(protected service: ContactService) 
  {
    super(service, "s/type/4");
  }

  loadData(d: any): void
  {
    for(let i = d.length-1; i>=0; i--)
    {
      const nameAndMail: string = d[i].fullName + " " + d[i].email; 
      const coord: string = d[i].error ? "Érronées":"À jour";
      this.data.push(
        [
          nameAndMail, d[i].firm?d[i].firm.name:"", d[i].role, 
          d[i].nextProspecting, coord, d[i].creator?d[i].creator.fullName:"",
          d[i].fullName, d[i].email, d[i].creator?d[i].creator.id:"",
          d[i].id
        ]);
    } 
  } 
}
