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

  loadData(remoteData: any): void {
    for (let i = remoteData.length - 1; i >= 0; i--) {
      this.data.push(
        [
          remoteData[i].name, remoteData[i].siret, remoteData[i].type.label,
          remoteData[i].adress, remoteData[i].postalCode, remoteData[i].city,
          remoteData[i].country.label, remoteData[i].id
        ]);
    }
  }
}

