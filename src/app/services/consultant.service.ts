import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Consultant } from '../entities/consultant';
import { API_SERVER } from '../app.constants';

import 'rxjs/add/operator/toPromise';
import { AuthenticationService } from "./auth.service";

@Injectable()
export class ConsultantService {
    constructor(private http: Http, private authService: AuthenticationService) {
    }

    private consultantApiUrl = API_SERVER.grc + 'consultant';
    private headers = this.authService.getHeaders();

    private handleError(error: any): Promise<any> {
        console.error('An error occurred in ConsultantService: ', error);  // for demo purposes only
        return Promise.reject(error.message || error);
    }

    create(consultant: Consultant): Promise<Consultant> {
        return this.http
            .post(this.consultantApiUrl, consultant, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json().consultant as Consultant;
            })
            .catch(this.handleError);
    }

    remove(consultantId: string): Promise<Response> {
        return this.http
            .delete(this.consultantApiUrl + "/" + consultantId, {headers: this.headers})
            .toPromise()
            .catch(this.handleError);
    }

    getById(consultantId: string): Promise<Consultant> {
        return this.http
            .get(this.consultantApiUrl + "/" + consultantId, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json().consultant as Consultant;
            })
            .catch(this.handleError);
    }

    update(consultant: Consultant): Promise<Consultant> {
        return this.http
            .post(this.consultantApiUrl + "/" + consultant.id, consultant, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json().consultant as Consultant;
            })
            .catch(this.handleError);
    }

    getAll(): Promise<Array<Consultant>> {
        return this.http
            .get(this.consultantApiUrl + "s", {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json().consultants as Array<Consultant>;
            })
            .catch(this.handleError);
    }


    getAllByProject(projectId: string): Promise<Array<Consultant>> {
        return this.http
            .get(this.consultantApiUrl + "s/project/" + projectId, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json().consultants as Array<Consultant>;
            })
            .catch(this.handleError);
    }

    getAllByUser(userId: string): Promise<Array<Consultant>> {
        return this.http
            .get(this.consultantApiUrl + "s/user/" + userId, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json().consultants as Array<Consultant>;
            })
            .catch(this.handleError);
    }
}