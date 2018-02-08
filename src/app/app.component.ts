import {Component, OnInit} from '@angular/core';
import {AlertService} from './services/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AlertService]
})
export class AppComponent implements  OnInit{
  title = 'app';

  constructor(){
  }

  ngOnInit(): void {
  }
}


