import { Component, OnInit } from '@angular/core';

import { TableTemplate } from '../../entities/table-template'

import { FirmService } from '../../services/firm.service'
import { Firm } from '../../entities/firm';
import { FirmTypeService } from '../../services/firm-type.service';
import { FirmType } from '../../entities/firm-type';

@Component({
  selector: 'doletic-company-table',
  templateUrl: '../../html/company-table.component.html',
  providers: [FirmService, FirmTypeService]
})
export class CompanyTableComponent extends TableTemplate implements OnInit {

  headers: string[] = ["Nom", "SIRET", "Type", "Adresse", "Code Postal", "Ville", "Pays"]; // + id
  activeFirm: Firm;

  showEditFirm: boolean = false;
  errorEditFirm: boolean = false;
  loadingEditFirm: boolean = false;

  firmTypes: FirmType[];

  constructor(
    private firmService: FirmService,
    private firmTypeService: FirmTypeService)
  {
    super(firmService)
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.loadFirmTypes();
  }

  startEditFirm(id : string) {
    this.firmService.getById(id).then(firm => {
      this.activeFirm = firm;
      this.showEditFirm = true;
    }).catch(res => console.log('Error in startEditFirm : ' + res));
  }

  cancelEditFirm(): void {
    this.showEditFirm = false;
    this.errorEditFirm = false;
    this.loadingEditFirm = false;
  }

  loadFirmTypes(): void {
    this.firmTypeService.getAll().then(
      res => {
        this.firmTypes = <FirmType[]>res;
      }
    ).catch( res => {console.log('Error in getFirmTypes : ' + res);})
  }

}
