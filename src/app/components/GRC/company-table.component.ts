import { Component, OnInit } from '@angular/core';

import { TableTemplate } from '../../entities/table-template'

import { FirmService } from '../../services/firm.service'
import { Firm } from '../../entities/firm';
import { FirmTypeService } from '../../services/firm-type.service';
import { FirmType } from '../../entities/firm-type';
import { CountryService } from '../../services/country.service';
import { Country } from '../../entities/country';

@Component({
  selector: 'doletic-company-table',
  templateUrl: '../../html/company-table.component.html',
  providers: [FirmService, FirmTypeService, CountryService]
})
export class CompanyTableComponent extends TableTemplate implements OnInit {

  headers: string[] = ["Nom", "SIRET", "Type", "Adresse", "Code Postal", "Ville", "Pays"]; // + id
  activeFirm: Firm;

  showEditFirm: boolean = false;
  errorEditFirm: boolean = false;
  loadingEditFirm: boolean = false;

  firmTypes: FirmType[];
  countries: Country[];

  constructor(private firmService: FirmService,
              private firmTypeService: FirmTypeService,
              private countryService: CountryService) {
    super(firmService)
  }

  cancelEditFirm(): void {
    this.showEditFirm = this.errorEditFirm = this.loadingEditFirm = false;
  }

  loadData(d: any): void
  {
    for(let i = d.length-1; i>=0; i--)
    {
        this.data.push(
          [
            d[i].name, d[i].siret, d[i].type?d[i].type.label:"",
            d[i].adress, d[i].postalCode, d[i].city,
            d[i].country?d[i].country.label:"", d[i].id
          ]);
    }
  }

  startEditFirm(id: string) {
    this.firmService.getById(id).then(firm => {
      this.activeFirm = firm;
      this.showEditFirm = true;
    }).catch(res => console.log('Error in startEditFirm : ' + res));
  }

  loadFirmTypes(): void {
    this.firmTypeService.getAll().then(
      res => {
        this.firmTypes = <FirmType[]>res;
      }
    ).catch(res => {
      console.log('Error in getFirmTypes : ' + res);
    })
  }

  loadCountries(): void {
    this.countryService.getAll().then(
      res => {
        this.countries = <Country[]>res;
      }
    ).catch(res => {
      console.log('Error in getCountries : ' + res);
    })
  }

  submitEditFirm(): void {
    this.errorEditFirm = false;
    this.loadingEditFirm = true;
    this.firmService.update(this.activeFirm).then(firm => {
    //this.firmService.editCurrent(this.activeFirm).then(firm => {
      this.activeFirm = firm;
      this.cancelEditFirm();
    }).catch(() => {
      this.loadingEditFirm = false;
      this.errorEditFirm = true
    });
  }
}

