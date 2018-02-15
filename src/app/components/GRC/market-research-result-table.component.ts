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
  spareColumns = {name: 6, mail: 7, prospectorId: 8};

  constructor(service: ContactService) 
  {
    super(service);
  }

  ngOnInit()
  {
    this.service.getTableData("4")
      .then(remoteData => 
      {
        this.loadData(remoteData);
        this.refreshView();
      });
  }

  loadData(d: any): void
  {
    for(let i = d.length-1; i>=0; i--)
    {
        const name: string = d[i].firstName + " " + d[i].lastName;
        const nameAndMail: string = name + " " + d[i].email; 
        const prospectorName: string = d[i].prospector.firstName + " " + d[i].prospector.lastName;
        const coord: string = d[i].error ? "Erronées":"À jour";
        this.data.push(
          [
            nameAndMail, d[i].firm.name, d[i].role, 
            d[i].nextProspecting, coord, prospectorName,
            name, d[i].email, d[i].prospector.id,
            d[i].id
          ]);
    } 
  } 
}
