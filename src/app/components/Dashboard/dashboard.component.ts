import {Component} from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
    selector: 'doletic-dashboard',
    templateUrl: '../html/dashboard.component.html',
    providers: [UserService]
})

export class DashboardComponent {

    constructor(private userService: UserService) {}
}