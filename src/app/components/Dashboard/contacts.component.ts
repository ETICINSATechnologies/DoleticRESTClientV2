import { Component, OnInit } from '@angular/core';

import { Contact } from '../../entities/contact';
import { ContactService } from '../../services/contact.service';


@Component({
  selector: 'doletic-contacts',
  templateUrl: '../../html/contacts.component.html'
})
export class ContactsComponent implements OnInit {
	limits: number[] = [1, 10, 25, 50, 100]; //TODO : supprimer 1
	selectedLimit: number = 50;

	contacts: Contact[];
	search_results: Contact[];

	
	searchFirstName: string = null;
  searchLastName: string = null;

  constructor(/*private contactService: ContactService*/) { }

  ngOnInit() {
  	this.getAllByCurrentUser();
  }

  getAllByCurrentUser(): void {
  	/*this.contactService.getAllByCurrentUser()
  		.then(contacts => this.contacts = this.search_results = contacts);*/
      this.contacts = this.search_results = [new Contact(1, 'Jane', 'Doe'), new Contact(2, 'Zacaria', 'Ane')];
  }

  search(): void {
  	let search_buffer: Contact[] = this.contacts;
  	if(this.searchFirstName != null) {
  		search_buffer = search_buffer.filter(contact => contact.firstName.search(new RegExp(this.searchFirstName, 'i')) != -1);
  	}
  	if(this.searchLastName != null) {
  		search_buffer = search_buffer.filter(contact => contact.lastName.search(new RegExp(this.searchLastName, 'i')) != -1);
  	}
	this.search_results = search_buffer;	

  }

}
