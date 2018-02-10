import { Component, OnInit } from '@angular/core';

import { Firm } from '../../entities/firm'

import { FirmService } from '../../services/firm.service'

@Component({
  selector: 'doletic-company-table',
  templateUrl: '../../html/company-table.component.html',
  providers: [FirmService]
})
export class CompanyTableComponent implements OnInit {
	PAGE_LENGTHS: number[] = [5, 10, 25, 50];
  page_length: number = 5;

  page_no: number = 1;

  sortedColumn: number = -1;
  sortOrder: number = 0; /*1 : lower comes first (ascending sort) 
                          -1 : greater comes first (descending sort)*/ 

  headers: string[] = ["Nom", "SIRET", "Type", "Adresse", "Code Postal", "Ville", "Pays"];
	data: string[][]; // headers + id

  filtered_data: string[][] = [];
  filterCriteria: string[] = [];

  constructor(private service: FirmService) { }

  ngOnInit() 
  {
  	/*this.service.getAll()
      .then(dataObj => this.chargeData(dataObj)); */
      let dataObj: Firm[] = 
      [new Firm(1, '324432', 'EDF', '20 Avenue Albert Einstein', '69100', 'Villeurbanne', '12/11/2017'),
       new Firm(2, '567765', 'AXA', '22 Rue de la Rigolle', '75000', 'Paris', '05/01/2018'),
       new Firm(3, '567775', 'DAXA', '12 Rue de la Rigolle', '75000', 'Paris', '15/01/2018')
      ];
      this.chargeData(dataObj);
  }

  /* Transforme les données envoyées par le service 
     et les charge dans un tableau 2D de string */
  chargeData(dataObj: Firm[]): void
  {
    this.data = [];
    for(const obj of dataObj)
    {
      let type: string;
      /*for(const item of obj.type) 
      {
        type += item.label + '\n';
      }*/    
      this.data.push([obj.name, obj.siret, type, obj.address, obj.postalCode, obj.city, 'unlabel', obj.id.toString()]);  
      if(this.sortedColumn >= 0) 
      { // sorts the table if needed when data is re-fetched
        this.sortData(this.sortedColumn);
      } 
      else
      { // refreshes displayed data
        this.filterData();
      } 
    }  
  }

  filterData(): void
  {
  	let search_buffer: string[][] = this.data;
    for (let i = 0; i < this.filterCriteria.length; i++) 
    {
      const term:string = this.filterCriteria[i];
      if(term)
      {
        const regex: RegExp = new RegExp(term.trim().replace(/\s+/g,'|'), 'iu');
        search_buffer = search_buffer.filter(tuple => regex.test(tuple[i]));
      }    
    }
	  this.filtered_data = search_buffer;
  }

  sortData(column: number): void
  {
    if(column==this.sortedColumn)
    {
      this.sortOrder*=-1;
    }
    else
    {
      this.sortedColumn = column;
      this.sortOrder = 1;
    }
    this.data.sort( (left, right) => 
      {
        if(left[column] < right[column]) return -this.sortOrder; // left comes first
        else if (left[column] > right[column]) return this.sortOrder;
        else return 0;
      }
    );
    this.filterData(); // reflects the sort on filtered data
  }  

  getId(tuple:string[]): string
  {
    return tuple[tuple.length-1];
  }
  ceil(x: number): number {
    return Math.ceil(x);
  }
  min(x: number, y: number): number {
    return Math.min(x, y);
  }
}
