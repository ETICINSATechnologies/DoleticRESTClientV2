import { Component } from '@angular/core';

import { TableTemplate } from '../../entities/table-template'

import { UserService } from '../../services/user.service'

@Component({
  selector: 'doletic-members-table',
  templateUrl: '../../html/members-table.component.html',
  providers: [UserService]
})
export class MembersTableComponent extends TableTemplate {
  headers: string[] = ["Nom/Email", "Poste", "Pôle", "Téléphone", "Année"]; // + name, mail, id
  loopedColumns: number[] = [1, 2, 3, 4];
  spareColumns = {name: 5, mail: 6};

  constructor(protected service: UserService) 
  {
    super(service, "s/current");
  }

  loadData(d: any): void
  {
    for(let i = d.length-1; i>=0; i--)
    {
        const nameAndMail: string = d[i].fullName + " " + d[i].email; 
        const year: string = (d[i].schoolYear?d[i].schoolYear.year:"") + (d[i].department?d[i].department.label:"");
        let position: string;
        let division: string;
        if(d[i].mainPosition) {
          position = d[i].mainPosition.label;
          if(d[i].mainPosition.division) {
            division = d[i].mainPosition.division.label;
          }
        }
        this.data.push(
          [
            nameAndMail, 
            position, 
            division,
            d[i].tel,
            year,
            d[i].fullName, d[i].email, d[i].id
          ]);
    } 
  } 
}
