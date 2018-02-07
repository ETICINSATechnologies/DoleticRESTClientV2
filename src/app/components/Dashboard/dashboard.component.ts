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
    showModal: boolean = false;
    formError: boolean = false;
    formLoading: boolean = false;
    schoolYears: SchoolYear[];
    countries: Country[];
    departments: Department[];
    genders: Gender[];
    user: User = new User(
        '',
        '',
        '',
        null,
        null,
        '',
        '',
        '',
        '',
        '',
        '',
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
);
    updatedUser: User;

    constructor(
      private userService: UserService,
      private genderService: GenderService,
      private  countryService: CountryService,
      private schoolYearService: SchoolYearService,
      private departmentService: DepartmentService
    ) {}

    ngOnInit(): void {
      this.loadUser();
      this.getCountries();
      this.getDepartments();
      this.getGenders();
      this.getSchoolYears();
    }
    loadUser() {
      /*this.user.firstName = 'Kristy';
      this.user.lastName = 'Test';
      this.user.schoolYear = new SchoolYear(null, 4);
      this.user.department = new Department(null,'IF');
      this.user.address = '20 Avenue Albert Einstein';
      this.user.country = new Country(null, 'France');
      this.user.birthDate = '1996-04-13';
      this.user.city = 'Villeurbanne';
      this.user.postalCode = 69100;*/
      this.userService.getCurrent().then(user => 
        {
          this.user = user;
          this.updatedUser = Object.assign({}, user);
        }).catch( res => console.log('Error in loadUser' + res));
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

    submit(): void
    {
      this.formError = false;
      this.formLoading = true;
      this.userService.update(this.updatedUser).then(user => 
      {
        this.user = user;
        this.cancel();
      }).catch( () => 
      {
        this.formLoading = false;
        this.formError = true
      });  

    }

    cancel(): void
    {
      this.updatedUser = Object.assign({}, this.user);
      this.showModal = this.formLoading = this.formError = false;
    }
}

