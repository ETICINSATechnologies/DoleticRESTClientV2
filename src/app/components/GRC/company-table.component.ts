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
}

