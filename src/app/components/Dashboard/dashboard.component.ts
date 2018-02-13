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
import {AlertService} from '../../services/alert.service';

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
    user: User;
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

    normalizeUser(): void {
        let date = new Date(this.user.birthDate);
        if(date) this.user.birthDate= date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
    }

    normalizeSelects(): void{
        if(!this.updatedUser.country && this.countries) this.updatedUser.country = this.countries[0];
        if(!this.updatedUser.department && this.departments) this.updatedUser.department = this.departments[0];
        if(!this.updatedUser.schoolYear && this.schoolYears) this.updatedUser.schoolYear = this.schoolYears[0];
        if(!this.updatedUser.gender && this.genders) this.updatedUser.gender = this.genders[0];
    }

    loadUser() {
      this.userService.getCurrent().then(user => 
        {
          this.user = user;
          this.normalizeUser();
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
            this.normalizeSelects();
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
              this.normalizeSelects();
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
              this.normalizeSelects();
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
              this.normalizeSelects();
          }
        )
    }

    submit(): void
    {
        setTimeout(this.normalizeUpdatedUser(), 4000);
        this.formError = false;
      this.formLoading = true;
      this.userService.update(this.updatedUser).then(user =>
      {
        this.user = user;
          this.normalizeUser();
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

    normalizeUpdatedUser(): void{
        if(this.updatedUser.gender){
            let i=0;
            let find = false;
            while(i<this.genders.length && !find){
                if(this.genders[i].label == this.updatedUser.gender.label){
                    find = true;
                    this.updatedUser.gender = this.genders[i].id;
                }
                i++;
            }
        }
        if(this.updatedUser.country) {
            let i=0;
            let find = false;
            while(i<this.countries.length && !find){
                if(this.countries[i].label == this.updatedUser.country.label){
                    find = true;
                    this.updatedUser.country = this.countries[i].id;
                }
                i++;
            }
        }
        if(this.updatedUser.department) {
            let i=0;
            let find = false;
            while(i<this.departments.length && !find){
                if(this.departments[i].label == this.updatedUser.department.label){
                    find = true;
                    this.updatedUser.department = this.departments[i].id;
                }
                i++;
            }
        }
        if(this.updatedUser.schoolYear) {
            let i=0;
            let find = false;
            while(i<this.schoolYears.length && !find){
                if(this.schoolYears[i].year == this.updatedUser.schoolYear.year){
                    find = true;
                    this.updatedUser.schoolYear = this.schoolYears[i].id;
                }
                i++;
            }
        }
    }
}

