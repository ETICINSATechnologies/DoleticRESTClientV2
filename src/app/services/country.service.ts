import { Injectable } from '@angular/core';
import { Http} from '@angular/http';

import {NewCountry} from "../entities/country.new";
import {Country} from "../entities/country";

import { API_SERVER } from '../app.constants';

import {AuthenticationService} from "./auth.service";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CountryService {
    constructor(private http: Http, private authService: AuthenticationService){}

    private countryApiUrl = API_SERVER.kernel + 'country';
    private countriesApiUrl = API_SERVER.kernel + 'countries';
    private headers = this.authService.getHeaders();

    private handleError(error: any): Promise<any> {
        console.error('An error occurred in CountryService: ', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    create(country: NewCountry):Promise<Country> {
        return this.http
            .post(this.countryApiUrl, JSON.stringify(country), {headers: this.headers})
            .toPromise()
            .then(res =>{
                return res.json().country as Country;
            })
            .catch(this.handleError);
    }

    remove(countryId:string):Promise<>{
        return this.http
            .delete(this.countryApiUrl+"/"+countryId, {headers: this.headers})
            .toPromise()
            .catch(this.handleError);
    }

    getById(countryId:string):Promise<Country>{
        return this.http
            .get(this.countryApiUrl + "/" + countryId, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json().country as Country;
            })
            .catch(this.handleError);
    }

    update(country: Country): Promise<Country>{
        return this.http
            .post(this.countryApiUrl + "/" + country.id, {
                label: country.label
            }, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().country as Country;
            })
            .catch(this.handleError);
    }

    getByLabel(countryLabel: string): Promise<Country>{
        return this.http
            .get(this.countryApiUrl + "/" + countryLabel, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().country as Country;
            })
            .catch(this.handleError);
    }

    getAll(): Promise<Array<Country>>{
        return this.http
            .get(this.countriesApiUrl, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().countries as Array<Country>;
            })
            .catch(this.handleError);
    }
}