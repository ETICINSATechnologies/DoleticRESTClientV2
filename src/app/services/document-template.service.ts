import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Response } from '@angular/http';

import { DocumentTemplate } from '../entities/document-template';
import { API_SERVER } from '../app.constants';

import 'rxjs/add/operator/toPromise';
import {AuthenticationService} from "./auth.service";

@Injectable()
export class DocumentTemplateService {
    constructor(private http: Http, private authService: AuthenticationService){}

    private document_templateApiUrl = API_SERVER.kernel + 'document_template';
    private headers = this.authService.getHeaders();

    private handleError(error: any): Promise<any> {
        console.error('An error occurred in DocumentTemplateService: ', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    remove(document_templateId:string):Promise<Response>{
        return this.http
            .delete(this.document_templateApiUrl+"/"+document_templateId, {headers: this.headers})
            .toPromise()
            .catch(this.handleError);
    }

    getById(document_templateId:string):Promise<DocumentTemplate>{
        return this.http
            .get(this.document_templateApiUrl + "/" + document_templateId, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json().document_template as DocumentTemplate;
            })
            .catch(this.handleError);
    }

    getByLabel(document_templateLabel: string): Promise<DocumentTemplate>{
        return this.http
            .get(this.document_templateApiUrl + "/" + document_templateLabel, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().document_template as DocumentTemplate;
            })
            .catch(this.handleError);
    }

    getAll(): Promise<Array<DocumentTemplate>>{
        return this.http
            .get(this.document_templateApiUrl + "s", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().document_templates as Array<DocumentTemplate>;
            })
            .catch(this.handleError);
    }
}