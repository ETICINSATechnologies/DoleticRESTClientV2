import { Component, OnInit } from '@angular/core';

import { AlertService } from '../services/alert.service';

@Component({

    moduleId: module.id,

    selector: 'doletic-alert',

    templateUrl: '../html/alert.component.html'

})

export class AlertComponent implements OnInit{

    messages: Array<any>;

    constructor(private alertService: AlertService) {
        alertService.message$.subscribe(message => {
            if(message){
                this.messages.push(message);
            }
            else{
                this.messages = [];
            }
        });
    }

    ngOnInit() {
    }
}