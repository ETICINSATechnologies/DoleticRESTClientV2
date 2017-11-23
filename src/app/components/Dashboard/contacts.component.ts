import { Component, OnInit } from '@angular/core';

import { Contact } from '../../entities/contact';
import { ContactService } from '../../services/contact.service';


@Component({
  selector: 'doletic-contacts',
  templateUrl: '../../html/contacts.component.html'
})
export class ContactsComponent implements OnInit {
	limits: number[] = [5, 10, 25, 50];
	limit: number = 5;
  page: number = 1;

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
      this.contacts = this.search_results = [new Contact(1, 'Jane', 'Doe'), new Contact(2, 'Zacaria', 'Ane'), new Contact(3, 'Adrien', 'Dupalais'), new Contact(4, 'Jean', 'François'), new Contact(5, 'Janette', 'Villetier'), new Contact(6, 'John', 'Doe'), new Contact(7, 'Zaca', 'Anne'), new Contact(8, 'Adrian', 'Du'), new Contact(9, 'Jack', 'Fran'), new Contact(10, 'Jane', 'Vil')];
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

  ceil(x: number): number {
    return Math.ceil(x);
  }

  min(x: number, y: number): number {
    return Math.min(x, y);
  }

}
