import {Component, Input} from '@angular/core';
import {FirmService} from "../../services/firm.service";
import {Firm} from "../../entities/firm";
import {FirmType} from "../../entities/firm-type";
import {CountryService} from "../../services/country.service";
import {FirmTypeService} from "../../services/firm-type.service";
import {Country} from "../../entities/country";

@Component({
  selector: 'edit-firm',
  templateUrl: '../../html/edit-firm.component.html',
  providers: [FirmService, FirmTypeService, CountryService]
})
export class EditFirmComponent {

  @Input() firmId: string;

  activeFirm: Firm;

  showEditFirm: boolean = false;
  errorEditFirm: boolean = false;
  loadingEditFirm: boolean = false;

  firmTypes: FirmType[];
  countries: Country[];

  constructor(private firmService: FirmService,
              private firmTypeService: FirmTypeService,
              private countryService: CountryService) {
  }

  cancelEditFirm(): void {
    this.showEditFirm = this.errorEditFirm = this.loadingEditFirm = false;
  }

  startEditFirm() {
    this.loadFirmTypes();
    this.loadCountries();
    this.firmService.getById(this.firmId).then(firm => {
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
      this.activeFirm = firm;
      this.cancelEditFirm();
    }).catch(() => {
      this.loadingEditFirm = false;
      this.errorEditFirm = true
    });
  }
}

