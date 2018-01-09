import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Response } from '@angular/http';

import { Delivery } from '../entities/delivery';
import { API_SERVER } from '../app.constants';

import 'rxjs/add/operator/toPromise';
import {AuthenticationService} from "./auth.service";

@Injectable()
export class DeliveryService {
    constructor(private http: Http, private authService: AuthenticationService){}

    private deliveryApiUrl = API_SERVER.rh + 'delivery';
    private headers = this.authService.getHeaders();

    private handleError(error: any): Promise<any> {
        console.error('An error occurred in DeliveryService: ', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    create(delivery: Delivery):Promise<Delivery> {
        return this.http
            .post(this.deliveryApiUrl, JSON.stringify(delivery), {headers: this.headers})
            .toPromise()
            .then(res =>{
                return res.json() as Delivery;
            })
            .catch(this.handleError);
    }

    remove(deliveryId:string):Promise<Response>{
        return this.http
            .delete(this.deliveryApiUrl+"/"+deliveryId, {headers: this.headers})
            .toPromise()
            .catch(this.handleError);
    }

    getById(deliveryId:string):Promise<Delivery>{
        return this.http
            .get(this.deliveryApiUrl + "/" + deliveryId, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json() as Delivery;
            })
            .catch(this.handleError);
    }

    update(delivery: Delivery): Promise<Delivery>{
        return this.http
            .post(this.deliveryApiUrl + "/" + delivery.id, delivery, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Delivery;
            })
            .catch(this.handleError);
    }

    deliver(deliveryId: string):Promise<Delivery>{
        return this.http
            .post(this.deliveryApiUrl + "/" + deliveryId + "/deliver", {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json() as Delivery;
            })
            .catch(this.handleError);
    }

    undeliver(deliveryId: string):Promise<Delivery>{
        return this.http
            .post(this.deliveryApiUrl + "/" + deliveryId + "/undeliver", {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json() as Delivery;
            })
            .catch(this.handleError);
    }

    pay(deliveryId: string):Promise<Delivery>{
        return this.http
            .post(this.deliveryApiUrl + "/" + deliveryId + "/pay", {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json() as Delivery;
            })
            .catch(this.handleError);
    }

    unpay(deliveryId: string):Promise<Delivery>{
        return this.http
            .post(this.deliveryApiUrl + "/" + deliveryId + "/unpay", {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json() as Delivery;
            })
            .catch(this.handleError);
    }

    getAll(): Promise<Array<Delivery>>{
        return this.http
            .get(this.deliveryApiUrl + "s", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Array<Delivery>;
            })
            .catch(this.handleError);
    }

    getAllByProject(projectId: string): Promise<Array<Delivery>>{
        return this.http
            .get(this.deliveryApiUrl + "s/project/" + projectId, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Array<Delivery>;
            })
            .catch(this.handleError);
    }

    getAllByTask(taskId): Promise<Array<Delivery>>{
        return this.http
            .get(this.deliveryApiUrl + "s/task/" + taskId, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Array<Delivery>;
            })
            .catch(this.handleError);
    }
}