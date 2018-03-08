import { Component } from '@angular/core';

import { TableTemplate } from '../../entities/table-template'

import { ContactService } from '../../services/contact.service'

@Component({
  selector: 'doletic-current-contacts-table',
  templateUrl: '../../html/current-contacts-table.component.html',
  providers: [ContactService]
})
export class CurrentContactsTableComponent extends TableTemplate {
  headers: string[] = ["Nom/Email", "Téléphone", "Mobile", "Société", "Rôle", "Prospecté"];
  loopedColumns: number[] = [1, 2, 3, 4, 5];
  spareColumns = {name: 6, mail: 7};

  constructor(protected service: ContactService) 
  {
    super(service, "2");
  }

  loadData(d: any): void
  {
    for(let i = d.length-1; i>=0; i--)
    {
        const nameAndMail: string = d[i].fullName + " " + d[i].email; 
        const prospected: string = d[i].fromProspecting ? "Oui":"Non";
        this.data.push(
          [
            nameAndMail, d[i].phone, d[i].cellPhone, 
            d[i].firm.name, d[i].role, prospected, 
            d[i].fullName, d[i].email, d[i].id
          ]);
    } 
  } 
}
