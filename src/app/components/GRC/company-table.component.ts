import {Component} from '@angular/core';

import {TableTemplate} from '../../entities/table-template'

import {FirmService} from '../../services/firm.service'

@Component({
  selector: 'doletic-company-table',
  templateUrl: '../../html/company-table.component.html',
  providers: [FirmService]
})
export class CompanyTableComponent extends TableTemplate {

  headers: string[] = ["Nom", "SIRET", "Type", "Adresse", "Code Postal", "Ville", "Pays"]; // + id

  constructor(private firmService: FirmService) {
    super(firmService)
  }

  loadData(d: any): void
  {
    for(let i = d.length-1; i>=0; i--)
    {
        this.data.push(
          [
            d[i].name, d[i].siret, d[i].type,
            d[i].adress, d[i].postalCode, d[i].city,
            d[i].country, d[i].id
          ]);
    }
  }
}

