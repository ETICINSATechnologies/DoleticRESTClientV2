import { OnInit } from '@angular/core';

export abstract class TableTemplate implements OnInit {
	PAGE_LENGTHS: number[] = [5, 10, 25, 50];
  page_length: number = 5;

  page_no: number = 1;

  sorted_column: number = -1;
  sort_order: number = 0; /*1 : lower comes first (ascending sort) 
                          -1 : greater comes first (descending sort)*/ 

  abstract headers: string[] = []; 
	data: string[][]; // headers + id

  filtered_data: string[][] = [];
  filter_criteria: string[] = [];

  constructor(protected service: any, protected serviceArg?: string) { } // overridden in subclass 

  ngOnInit()
  {
  	this.fetchData();
  }
  
  /* Converts the json remoteData into a string[][] and load it into data*/
  abstract loadData(remoteData: any): void;

  fetchData(): void
  {
    this.data = null;
    this.filtered_data = [];
    let promise: Promise<any> = this.serviceArg?this.service.getTableData(this.serviceArg):this.service.getTableData();
    promise.then(remoteData => 
    {
      this.data = [];
      this.loadData(remoteData);
      this.refreshView();
    });
  }

  refreshView(): void
  {
    if(this.sorted_column >= 0) 
    { // sorts the table if needed when data is re-fetched
      this.sortData(this.sorted_column);
    } 
    else
    { // refreshes displayed data
      this.filterData();
    } 
  }

  filterData(): void
  {
  	let search_buffer: string[][] = this.data;
    for (let i = 0; i < this.filter_criteria.length; i++) 
    {
      const term:string = this.filter_criteria[i];
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
    if(column==this.sorted_column)
    {
      this.sort_order*=-1;
    }
    else
    {
      this.sorted_column = column;
      this.sort_order = 1;
    }
    this.data.sort( (left, right) => 
      {
        if(left[column] < right[column]) return -this.sort_order; // left comes first
        else if (left[column] > right[column]) return this.sort_order;
        else return 0;
      }
    );
    this.filterData(); // reflects the sort on filtered data
  } 

  resetFilters(): void
  {
    this.filter_criteria = [];
    this.filtered_data = this.data;
  }

  /*Could fail if a " were to be followed by a \t in one of the table's field*/
  exportToCSV(fileName: string): void
  {
    const quote: string = '"';
    const delim: string = "\t";
    const new_line: string = "\n";
    const file_type: string = "text/csv;charset=utf-8;";

    /* Create unique filename */
    const date: Date = new Date();
    fileName += "_" + date.toLocaleDateString() + "_" 
             + date.toLocaleTimeString()
             + '.csv';

    /* Convert filtered data to CSV */
    let csvData: string = "";
    for(let header of this.headers)  
    {
      csvData += quote + header + quote + delim;
    }
    csvData += new_line;

    for(let tuple of this.filtered_data)
    {
      for(let i = 0; i<this.headers.length; i++)
      {
        csvData += quote + tuple[i] + quote + delim;
      }  
      csvData += new_line;
    } 

    /* Launch download */
    let blob: Blob = new Blob([csvData], { type: file_type });
    if (navigator.msSaveBlob)
    { // IE 10+
      navigator.msSaveBlob(blob, fileName);
    } 
    else 
    {
      let link: HTMLAnchorElement = document.createElement("a");
      if (link.download !== undefined) 
      {   // feature detection
          // Browsers that support HTML5 download attribute
          let url: string = URL.createObjectURL(blob);
          link.setAttribute("href", url);
          link.setAttribute("download", fileName);
          link.setAttribute("style", "visibility:hidden");
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
      }
      else
      {
        console.log("Votre navigateur ne supporte pas cette fonctionnalité.")
      }  
    }
  }
  
  // suppose que le service place l'ID dans la dernière colonne de data
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
