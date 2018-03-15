import {Component, Input} from '@angular/core';

import {ContactService} from "../../services/contact.service";
import {Contact} from "../../entities/contact";
import {ContactType} from "../../entities/contact-type";
import {FirmService} from "../../services/firm.service";
import {Gender} from "../../entities/gender";
import {GenderService} from "../../services/gender.service";
import {ContactTypeService} from "../../services/contact-type.service";
import {Firm} from "../../entities/firm";
import {User} from "../../entities/user";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'edit-contact',
  templateUrl: '../../html/edit-contact.component.html',
  providers: [ContactService, FirmService, ContactTypeService, UserService]
})
export class EditContactComponent {

  @Input() contactId: string;

  activeContact: Contact;

  showEditContact: boolean = false;
  errorEditContact: boolean = false;
  loadingEditContact: boolean = false;

  contactTypes: ContactType[];
  genders: Gender[];
  firms: Firm[];
  users: User[];

  constructor(private contactTypeService: ContactTypeService,
              private contactService: ContactService,
              private firmService: FirmService,
              private genderService: GenderService,
              private userService: UserService) {
  }

  cancelEditContact(): void {
    this.showEditContact = this.errorEditContact = this.loadingEditContact = false;
  }

  startEditContact() {
    this.loadContactTypes();
    this.loadGenders();
    // TODO : load data
    // this.loadFirms();
    // this.loadUsers();
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
      console.log('Error in loadContactTypes : ' + res);
    })
  }

  loadFirms(): void {
    this.firmService.getAll().then(
      res => {
        this.firms = <Firm[]>res;
      }
    ).catch(res => {
      console.log('Error in loadFirms : ' + res);
    })
  }

  loadUsers(): void {
    this.userService.getAllCurrent().then(
      res => {
        this.users = <User[]>res;
      }
    ).catch(res => {
      console.log('Error in loadUsers : ' + res);
    })
  }

  loadGenders(): void {
    this.genderService.getAll().then(
      res => {
        this.genders = <Gender[]>res;
      }
    ).catch(res => {
      console.log('Error in loadGenders : ' + res);
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

