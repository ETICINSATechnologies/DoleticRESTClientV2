import { Component } from '@angular/core';

import { CurrentContactsTableComponent } from './current-contacts-table.component'

import { ContactService } from '../../services/contact.service'

@Component({
  selector: 'doletic-old-contacts-table',
  templateUrl: '../../html/old-contacts-table.component.html',
  providers: [ContactService]
})
export class OldContactsTableComponent extends CurrentContactsTableComponent {

  constructor(protected service: ContactService) 
  {
    super(service);
    this.serviceArg = "1";
  }

}
