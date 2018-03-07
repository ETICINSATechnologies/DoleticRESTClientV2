import {Component, Input, OnInit} from '@angular/core';

import { Contact } from '../../entities/contact';
import { ContactService } from '../../services/contact.service';


@Component({
  selector: 'doletic-contacts',
  templateUrl: '../../html/contacts.component.html',
  providers: [ContactService]
})
export class ContactsComponent implements OnInit {
    @Input() creatorId;
    ready: boolean = false;
	limits: number[] = [5, 10, 25, 50];
	limit: number = 5;
  page: number = 1;

	contacts: Contact[] = [];
	search_results: Contact[] = [];

	
	searchName: string = null;
  searchStatus: string = null;
  statusOptions: string[] = ['Status1', 'Status2', 'Status3'];

  constructor(private contactService: ContactService) { }

  ngOnInit() {
  	this.getAllByCurrentUser();
  }

  getAllByCurrentUser(): void {
  	this.contactService.getAllByCreator(this.creatorId)
  		.then(contacts =>{
  		    this.contacts = this.search_results = contacts;
  		    this.ready = true;
        });
  }  

  search(): void {
  	let search_buffer: Contact[] = this.contacts;
  	if(this.searchName != null) {
      let regex : RegExp = new RegExp(this.searchName.trim().replace(/\s+/g,'|'), 'i');
  		search_buffer = search_buffer.filter(contact => contact.firstName.search(regex) != -1 || contact.lastName.search(regex) != -1);
  	}
  	/*if(this.searchStatus != null) {
      let regex : RegExp = new RegExp(this.searchStatus.trim().replace(/,+/g,'|'), 'i');
  		search_buffer = search_buffer.filter(contact => contact.role.search(regex) != -1);
  	}*/
	this.search_results = search_buffer;	
  }

  ceil(x: number): number {
    return Math.ceil(x);
  }

  min(x: number, y: number): number {
    return Math.min(x, y);
  }

}
