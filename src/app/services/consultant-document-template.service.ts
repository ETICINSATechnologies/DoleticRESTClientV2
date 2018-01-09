import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Response } from '@angular/http';

import { ConsultantDocumentTemplate } from '../entities/consultant-document-template';
import { API_SERVER } from '../app.constants';

import 'rxjs/add/operator/toPromise';
import {AuthenticationService} from "./auth.service";

@Injectable()
export class ConsultantDocumentTemplateService {
    constructor(private http: Http, private authService: AuthenticationService){}

    private consultant_document_templateApiUrl = API_SERVER.ua + 'consultant_document_template';
    private headers = this.authService.getHeaders();

    private handleError(error: any): Promise<any> {
        console.error('An error occurred in ConsultantDocumentTemplateService: ', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    create(consultant_document_template: ConsultantDocumentTemplate):Promise<ConsultantDocumentTemplate> {
        return this.http
            .post(this.consultant_document_templateApiUrl, JSON.stringify(consultant_document_template), {headers: this.headers})
            .toPromise()
            .then(res =>{
                return res.json() as ConsultantDocumentTemplate;
            })
            .catch(this.handleError);
    }

    remove(consultant_document_templateId:string):Promise<Response>{
        return this.http
            .delete(this.consultant_document_templateApiUrl+"/"+consultant_document_templateId, {headers: this.headers})
            .toPromise()
            .catch(this.handleError);
    }

    getById(consultant_document_templateId:string):Promise<ConsultantDocumentTemplate>{
        return this.http
            .get(this.consultant_document_templateApiUrl + "/" + consultant_document_templateId, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json() as ConsultantDocumentTemplate;
            })
            .catch(this.handleError);
    }

    update(consultant_document_template: ConsultantDocumentTemplate): Promise<ConsultantDocumentTemplate>{
        return this.http
            .post(this.consultant_document_templateApiUrl + "/" + consultant_document_template.id, consultant_document_template, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as ConsultantDocumentTemplate;
            })
            .catch(this.handleError);
    }

    getAll(): Promise<Array<ConsultantDocumentTemplate>>{
        return this.http
            .get(this.consultant_document_templateApiUrl + "s", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Array<ConsultantDocumentTemplate>;
            })
            .catch(this.handleError);
    }
}