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
    selector: 'doletic-dashboard',
    templateUrl: '../../html/dashboard.component.html',
    providers: [UserService, CountryService, GenderService, SchoolYearService, DepartmentService]
})

export class DashboardComponent implements OnInit{
    showModal = false;
    schoolYears: SchoolYear[];
    countries: Country[];
    departments: Department[];
    genders: Gender[];
    user: User;

    constructor(
      private userService: UserService,
      private genderService: GenderService,
      private  countryService: CountryService,
      private schoolYearService: SchoolYearService,
      private departmentService: DepartmentService
    ) {}

    ngOnInit(): void {
      this.getUser();
      this.getCountries();
      this.getDepartments();
      this.getGenders();
      this.getSchoolYears();
    }

    getUser(){
        this.userService.getCurrent()
            .catch()
            .then(res => {
                this.user = res;
            })
    }

    getCountries(): void {
      this.countryService.getAll()
        .catch( res => {
          console.log('Error in getCountries');
        })
        .then(
          res => {
            this.countries = <Country[]>res;
          }
        )
    }

    getGenders(): void {
      this.genderService.getAll()
        .catch( res => {
          console.log('Error in getGenders');
        })
        .then(
          res => {
            this.genders = <Gender[]>res;
          }
        )
    }

    getSchoolYears(): void {
      this.schoolYearService.getAll()
        .catch( res => {
          console.log('Error in getSchoolYears');
        })
        .then(
          res => {
            this.schoolYears = <SchoolYear[]>res;
          }
        )
    }

    getDepartments(): void {
      this.departmentService.getAll()
        .catch( res => {
          console.log('Error in getDepartments');
        })
        .then(
          res => {
            this.departments = <Department[]>res;
          }
        )
    }
}

