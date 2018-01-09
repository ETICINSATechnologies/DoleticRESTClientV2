/**
 * Created by Julien on 08/11/2017.
 */
import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Response } from '@angular/http';

import { DeliveryDocument } from '../entities/delivery-document';
import { API_SERVER } from '../app.constants';

import 'rxjs/add/operator/toPromise';
import {AuthenticationService} from "./auth.service";

@Injectable()
export class DeliveryDocumentService {
    constructor(private http: Http, private authService: AuthenticationService){}

    private deliveryDocumentApiUrl = API_SERVER.ua + 'delivery_document';
    private headers = this.authService.getHeaders();

    private handleError(error: any): Promise<any> {
        console.error('An error occurred in DeliveryDocumentService: ', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    create(deliveryDocument: DeliveryDocument):Promise<DeliveryDocument> {
        return this.http
            .post(this.deliveryDocumentApiUrl, JSON.stringify(deliveryDocument), {headers: this.headers})
            .toPromise()
            .then(res =>{
                return res.json() as DeliveryDocument;
            })
            .catch(this.handleError);
    }

    remove(deliveryDocumentId:string):Promise<Response>{
        return this.http
            .delete(this.deliveryDocumentApiUrl+"/"+deliveryDocumentId, {headers: this.headers})
            .toPromise()
            .catch(this.handleError);
    }

    getById(deliveryDocumentId:string):Promise<DeliveryDocument>{
        return this.http
            .get(this.deliveryDocumentApiUrl + "/" + deliveryDocumentId, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json() as DeliveryDocument;
            })
            .catch(this.handleError);
    }

    update(deliveryDocument: DeliveryDocument): Promise<DeliveryDocument>{
        return this.http
            .post(this.deliveryDocumentApiUrl + "/" + deliveryDocument.id, deliveryDocument, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as DeliveryDocument;
            })
            .catch(this.handleError);
    }

    download(deliveryDocumentId: string): Promise<Response>{
        return this.http
            .get(this.deliveryDocumentApiUrl + "/" + deliveryDocumentId+ "/download", {headers: this.headers})
            .toPromise()
            .catch(this.handleError);
    }

    getByDelivery(deliveryId: string): Promise<Array<DeliveryDocument>>{
        return this.http
            .get(this.deliveryDocumentApiUrl + "s/delivery/" + deliveryId, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Array<DeliveryDocument>;
            })
            .catch(this.handleError);
    }

    getByAuditor(userId: string): Promise<Array<DeliveryDocument>>{
        return this.http
            .get(this.deliveryDocumentApiUrl + "s/auditor/" + userId, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Array<DeliveryDocument>;
            })
            .catch(this.handleError);
    }

    getByCurrentAuditor(): Promise<Array<DeliveryDocument>>{
        return this.http
            .get(this.deliveryDocumentApiUrl + "s/auditor/current", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Array<DeliveryDocument>;
            })
            .catch(this.handleError);
    }

    getAll(): Promise<Array<DeliveryDocument>>{
        return this.http
            .get(this.deliveryDocumentApiUrl + "s", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Array<DeliveryDocument>;
            })
            .catch(this.handleError);
    }

    getAllCurrent(): Promise<Array<DeliveryDocument>>{
        return this.http
            .get(this.deliveryDocumentApiUrl + "s/current", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Array<DeliveryDocument>;
            })
            .catch(this.handleError);
    }
}