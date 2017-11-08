import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

import { Firm } from '../entities/firm';
import { API_SERVER } from '../app.constants';

import 'rxjs/add/operator/toPromise';
import {AuthenticationService} from "./auth.service";

@Injectable()
export class FirmService {
    constructor(private http: Http, private authService: AuthenticationService){}
    
    private firmApiUrl = API_SERVER.grc + 'firm';
    private headers = this.authService.getHeaders();

    private handleError(error: any): Promise<any> {
        console.error('An error occurred in FirmService: ', error);  // for demo purposes only
        return Promise.reject(error.message || error);
    }

    create(firm: Firm): Promise<Firm> {
        return this.http
            .post(this.firmApiUrl, firm, {headers: this.headers})
            .toPromise()
            .then(res =>{
                return res.json().firm as Firm;
            })
            .catch(this.handleError);
    }

    remove(firmId:string):Promise<Response>{
        return this.http
            .delete(this.firmApiUrl + "/" + firmId, {headers: this.headers})
            .toPromise()
            .catch(this.handleError);
    }

    getById(firmId:string):Promise<Firm>{
        return this.http
            .get(this.firmApiUrl + "/" + firmId, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json().firm as Firm;
            })
            .catch(this.handleError);
    }

    update(firm: Firm): Promise<Firm>{
        return this.http
            .post(this.firmApiUrl + "/" + firm.id, firm, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().firm as Firm;
            })
            .catch(this.handleError);
    }

    getByName(firmName:string):Promise<Firm>{
        return this.http
            .get(this.firmApiUrl + "/" + firmName, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json().firm as Firm;
            })
            .catch(this.handleError);
    }

    getAll(): Promise<Array<Firm>>{
        return this.http
            .get(this.firmApiUrl + "s", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().firms as Array<Firm>;
            })
            .catch(this.handleError);
    }

    getAllByCountry(countryId:string): Promise<Array<Firm>>{
    return this.http
      .get(this.firmApiUrl + "s/country/" + countryId, {headers: this.headers})
      .toPromise()
      .then(res=>{
        return res.json().firms as Array<Firm>;
      })
      .catch(this.handleError);
    }

    getAllByType(typeId:string): Promise<Array<Firm>>{
    return this.http
      .get(this.firmApiUrl + "s/type/" + typeId, {headers: this.headers})
      .toPromise()
      .then(res=>{
        return res.json().firms as Array<Firm>;
      })
      .catch(this.handleError);
    }
}