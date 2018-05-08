import { Component } from '@angular/core';

import { MembersTableComponent } from './members-table.component'

import { UserService } from '../../services/user.service'

@Component({
  selector: 'doletic-old-members-table',
  templateUrl: '../../html/old-members-table.component.html',
  providers: [UserService]
})
export class OldMembersTableComponent extends MembersTableComponent {

  constructor(protected service: UserService) 
  {
    super(service);
    this.serviceArg = "s/old";
  }
}  


