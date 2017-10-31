import { Injectable } from '@angular/core';
import { Headers, Http} from '@angular/http';

import { Division } from '../entities/division';
import { NewDivision } from '../entities/division.new';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class DivisionService {

    private divisionApiUrl = 'http://localhost:8000/api/kernel/division';
    private headers = new Headers({'Content-Type': 'application/json'});


    constructor(private http: Http){}

    private handleError(error: any): Promise<any> {
        console.error('An error occurred in DivisionService: ', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    create(division: NewDivision): Promise<Division> {
        return this.http
            .post(this.divisionApiUrl, JSON.stringify(division), {headers: this.headers})
            .toPromise()
            .then(res =>{
                return res.json().division as Division;
            })
            .catch(this.handleError);
    }

    remove(divisionId:string):Promise<>{
        return this.http
            .delete(this.divisionApiUrl+divisionId)
            .toPromise()
            .catch(this.handleError);
    }

    getById(divisionId:string):Promise<Division>{
        return this.http
            .get(this.divisionApiUrl + "/" + divisionId)
            .toPromise()
            .then(res => {
                return res.json().division as Division;
            })
            .catch(this.handleError);
    }
}