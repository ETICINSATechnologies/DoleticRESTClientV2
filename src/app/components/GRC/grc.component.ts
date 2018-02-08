import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../entities/user";
import {GenderService} from "../../services/gender.service";
import {CountryService} from "../../services/country.service";
import {SchoolYearService} from "../../services/school-year.service";
import {DepartmentService} from "../../services/department.service";
import {SchoolYear} from "../../entities/school-year";
import {Country} from "../../entities/country";
import {Department} from "../../entities/department";
import {Gender} from "../../entities/gender";

@Component({
    selector: 'doletic-grc',
    templateUrl: '../../html/grc.component.html',
    providers: [UserService, CountryService, GenderService, SchoolYearService, DepartmentService]
})

export class GRCComponent implements OnInit{

    constructor(
        private userService: UserService,
        private genderService: GenderService,
        private  countryService: CountryService,
        private schoolYearService: SchoolYearService,
        private departmentService: DepartmentService
    ) {}

    ngOnInit(): void {

    }
}
