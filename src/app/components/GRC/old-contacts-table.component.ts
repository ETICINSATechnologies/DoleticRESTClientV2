import { Component } from '@angular/core';

import { CurrentContactsTableComponent } from './current-contacts-table.component'

import { ContactService } from '../../services/contact.service'

@Component({
  selector: 'doletic-old-contacts-table',
  templateUrl: '../../html/old-contacts-table.component.html',
  providers: [ContactService]
})
export class OldContactsTableComponent extends CurrentContactsTableComponent {

  ngOnInit()
  {
    this.service.getTableData("1")
      .then(remoteData => 
      {
        this.loadData(remoteData);
        this.refreshView();
      });
  }

}
