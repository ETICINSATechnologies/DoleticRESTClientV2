import {Component, Input, OnInit} from '@angular/core';

import {ContactService} from "../../services/contact.service";
import {Contact} from "../../entities/contact";
import {ContactType} from "../../entities/contact-type";
import {FirmService} from "../../services/firm.service";
import {Gender} from "../../entities/gender";
import {GenderService} from "../../services/gender.service";
import {ContactTypeService} from "../../services/contact-type.service";

@Component({
  selector: 'edit-contact',
  templateUrl: '../../html/edit-contact.component.html',
  providers: [ContactService, FirmService, ContactTypeService]
})
export class EditContactComponent implements OnInit {

  @Input() contactId: string;

  headers: string[] = ["Prénom", "Nom", "Civilité", "Type de contact", "Mail", "Téléphone", "Téléphone mobile",
      "Société", "Poste", "Origine des coordonnées", "Prochaine prospection", "Issu de la prospection", "Assigné à",
      "Erreur dans les coordonnées", "Notes"];
  activeContact: Contact;

  showEditContact: boolean = false;
  errorEditContact: boolean = false;
  loadingEditContact: boolean = false;

  contactTypes: ContactType[];
  genders: Gender[];

  constructor(private contactService: ContactService,
              private contactTypeService: ContactTypeService,
              private firmService: FirmService,
              private genderService: GenderService) {}

  cancelEditContact(): void
  {
    this.showEditContact = this.errorEditContact = this.loadingEditContact = false;
  }


  ngOnInit(): void {
    this.loadContactTypes();
    this.loadGenders();
  }

  startEditContact() {
    this.contactService.getById(this.contactId).then(contact => {
      this.activeContact = contact;
      this.showEditContact = true;
    }).catch(res => console.log('Error in startEditContact : ' + res));
  }

  loadContactTypes(): void {
    this.contactTypeService.getAll().then(
      res => {
        this.contactTypes = <ContactType[]>res;
      }
    ).catch(res => {
      console.log('Error in getContactTypes : ' + res);
    })
  }

  loadGenders(): void {
      this.genderService.getAll().then(
          res => {
              this.genders = <Gender[]>res;
          }
      ).catch(res => {
          console.log('Error in getGenders : ' + res);
      })
  }

  submitEditContact(): void {
    this.errorEditContact = false;
    this.loadingEditContact = true;
    this.contactService.update(this.activeContact).then(contact => {
      this.activeContact = contact;
      this.cancelEditContact();
    }).catch(() => {
      this.loadingEditContact = false;
      this.errorEditContact = true
    });
  }
}

