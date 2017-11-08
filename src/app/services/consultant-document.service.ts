import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Response } from '@angular/http';

import { ConsultantDocument } from '../entities/consultant-document';
import { API_SERVER } from '../app.constants';

import 'rxjs/add/operator/toPromise';
import {AuthenticationService} from "./auth.service";

@Injectable()
export class ConsultantDocumentService {
    constructor(private http: Http, private authService: AuthenticationService){}

    private consultant_documentApiUrl = API_SERVER.rh + 'consultant_document';
    private headers = this.authService.getHeaders();

    private handleError(error: any): Promise<any> {
        console.error('An error occurred in ConsultantDocumentService: ', error);  // for demo purposes only
        return Promise.reject(error.message || error);
    }

    create(consultant_document: ConsultantDocument):Promise<ConsultantDocument> {
        return this.http
            .post(this.consultant_documentApiUrl, JSON.stringify(consultant_document), {headers: this.headers})
            .toPromise()
            .then(res =>{
                return res.json().consultant_document as ConsultantDocument;
            })
            .catch(this.handleError);
    }

    remove(consultant_documentId:string):Promise<Response>{
        return this.http
            .delete(this.consultant_documentApiUrl+"/"+consultant_documentId, {headers: this.headers})
            .toPromise()
            .catch(this.handleError);
    }

    getById(consultant_documentId:string):Promise<ConsultantDocument>{
        return this.http
            .get(this.consultant_documentApiUrl + "/" + consultant_documentId, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json().consultant_document as ConsultantDocument;
            })
            .catch(this.handleError);
    }

    update(consultant_document: ConsultantDocument): Promise<ConsultantDocument>{
        return this.http
            .post(this.consultant_documentApiUrl + "/" + consultant_document.id, consultant_document, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().consultant_document as ConsultantDocument;
            })
            .catch(this.handleError);
    }

    getAll(): Promise<Array<ConsultantDocument>>{
        return this.http
            .get(this.consultant_documentApiUrl + "s", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().consultant_documents as Array<ConsultantDocument>;
            })
            .catch(this.handleError);
    }

    getAllValidatedByCurrentUser(): Promise<Array<ConsultantDocument>>{
        return this.http
            .get(this.consultant_documentApiUrl + "s/auditor/current", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().consultant_documents as Array<ConsultantDocument>;
            })
            .catch(this.handleError);
    }

    getAllValidatedByUser(userId: string): Promise<Array<ConsultantDocument>>{
        return this.http
            .get(this.consultant_documentApiUrl + "s/auditor/" + userId, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().consultant_documents as Array<ConsultantDocument>;
            })
            .catch(this.handleError);
    }

    getAllByConsultant(consultantId: string): Promise<Array<ConsultantDocument>>{
        return this.http
            .get(this.consultant_documentApiUrl + "s/consultant/" + consultantId, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().consultant_documents as Array<ConsultantDocument>;
            })
            .catch(this.handleError);
    }

    getAllFromTemplate(templateId: string): Promise<Array<ConsultantDocument>>{
        return this.http
            .get(this.consultant_documentApiUrl + "s/template/" + templateId, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().consultant_documents as Array<ConsultantDocument>;
            })
            .catch(this.handleError);
    }
}