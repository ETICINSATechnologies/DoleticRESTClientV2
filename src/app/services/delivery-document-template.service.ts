import { Injectable } from '@angular/core';
import { Http} from '@angular/http';

import {DeliveryDocumentTemplate} from "../entities/delivery-document-template";

import { API_SERVER } from '../app.constants';

import {AuthenticationService} from "./auth.service";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DeliveryDocumentTemplateService {
    constructor(private http: Http, private authService: AuthenticationService){}

    private deliveryDocumentTemplateApiUrl = API_SERVER.ua + 'delivery_document_template';
    private countriesApiUrl = this.deliveryDocumentTemplateApiUrl + 's';
    private headers = this.authService.getHeaders();

    private handleError(error: any): Promise<any> {
        console.error('An error occurred in DeliveryDocumentTemplateService: ', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    create(deliveryDocumentTemplate: DeliveryDocumentTemplate):Promise<DeliveryDocumentTemplate> {
        return this.http
            .post(this.deliveryDocumentTemplateApiUrl, JSON.stringify(deliveryDocumentTemplate), {headers: this.headers})
            .toPromise()
            .then(res =>{
                return res.json() as DeliveryDocumentTemplate;
            })
            .catch(this.handleError);
    }

    remove(deliveryDocumentTemplateId:string):Promise<Response>{
        return this.http
            .delete(this.deliveryDocumentTemplateApiUrl+"/"+deliveryDocumentTemplateId, {headers: this.headers})
            .toPromise()
            .catch(this.handleError);
    }

    getById(deliveryDocumentTemplateId:string):Promise<DeliveryDocumentTemplate>{
        return this.http
            .get(this.deliveryDocumentTemplateApiUrl + "/" + deliveryDocumentTemplateId, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json() as DeliveryDocumentTemplate;
            })
            .catch(this.handleError);
    }

    update(deliveryDocumentTemplate: DeliveryDocumentTemplate): Promise<DeliveryDocumentTemplate>{
        return this.http
            .post(this.deliveryDocumentTemplateApiUrl + "/" + deliveryDocumentTemplate.id, {
                label: deliveryDocumentTemplate.label
            }, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as DeliveryDocumentTemplate;
            })
            .catch(this.handleError);
    }

    getAll(): Promise<Array<DeliveryDocumentTemplate>>{
        return this.http
            .get(this.countriesApiUrl, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Array<DeliveryDocumentTemplate>;
            })
            .catch(this.handleError);
    }
}