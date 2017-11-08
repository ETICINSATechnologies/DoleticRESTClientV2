import { Injectable } from '@angular/core';
import { Http} from '@angular/http';

import {PublishProjectDocument} from "../entities/publish-project-document";
import {PublishConsultantDocument} from "../entities/publish-consultant-document";
import {PublishDeliveryDocument} from "../entities/publish-delivery-document";
import {Right} from "../entities/right";

import { API_SERVER } from '../app.constants';

import {AuthenticationService} from "./auth.service";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UAService {
    constructor(private http: Http, private authService: AuthenticationService){}

    private uaApiUrl = API_SERVER.ua;
    private headers = this.authService.getHeaders();

    private handleError(error: any): Promise<any> {
        console.error('An error occurred in UAService: ', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    publishConsultantDocument(publishConsultantDocument: PublishConsultantDocument):Promise<Response> {
        return this.http
            .post(this.uaApiUrl + '/publish/consultant', JSON.stringify(publishConsultantDocument), {headers: this.headers})
            .toPromise()
            .catch(this.handleError);
    }

    publishDeliveryDocument(publishDeliveryDocument: PublishDeliveryDocument):Promise<Response> {
        return this.http
            .post(this.uaApiUrl + '/publish/delivery', JSON.stringify(publishDeliveryDocument), {headers: this.headers})
            .toPromise()
            .catch(this.handleError);
    }

    publishProjectDocument(publishProjectDocument: PublishProjectDocument):Promise<Response> {
        return this.http
            .post(this.uaApiUrl + '/publish/delivery', JSON.stringify(publishProjectDocument), {headers: this.headers})
            .toPromise()
            .catch(this.handleError);
    }

    getCurrentUserRights():Promise<Right>{
        return this.http
            .get(this.uaApiUrl + "/rights", {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json() as Right;
            })
            .catch(this.handleError);
    }
}