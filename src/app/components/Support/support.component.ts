import {Component, OnInit} from '@angular/core';

import {SupportService} from "../../services/support.service";

import {MyTicketsComponent} from "./my-tickets.component"
import {TicketsToSolveComponent} from "./tickets-to-solve.component"

@Component({
    selector: 'doletic-support',
    templateUrl: '../../html/support.component.html',
    providers: [SupportService]
})

export class SupportComponent implements OnInit{
  right_level: number;

  constructor(private supportService: SupportService){}
  
  ngOnInit(): void {
    //this.supportService.getCurrentUserRights().then(right_level => this.right_level = right_level.right);
    this.right_level = 4;
  }
};


 

