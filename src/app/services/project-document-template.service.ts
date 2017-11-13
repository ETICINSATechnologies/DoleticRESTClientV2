import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Response } from '@angular/http';

import { ProjectDocumentTemplate } from '../entities/project-document-template';
//import { NewProjectDocumentTemplate } from '../entities/project-document-template.new';
import { API_SERVER } from '../app.constants';

import 'rxjs/add/operator/toPromise';
import {AuthenticationService} from "./auth.service";

@Injectable()
export class ProjectDocumentTemplateService {
    constructor(private http: Http, private authService: AuthenticationService){}

    private project_document_templateApiUrl = API_SERVER.ua + 'project_document_template';
    private headers = this.authService.getHeaders();

    private handleError(error: any): Promise<any> {
        console.error('An error occurred in ProjectDocumentTemplateService: ', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    /*create(project_document_template: NewProjectDocumentTemplate):Promise<ProjectDocumentTemplate> {
        return this.http
            .post(this.project_document_templateApiUrl, JSON.stringify(project_document_template), {headers: this.headers})
            .toPromise()
            .then(res =>{
                return res.json().project_document_template as ProjectDocumentTemplate;
            })
            .catch(this.handleError);
    }*/

    remove(project_document_templateId:string):Promise<Response>{
        return this.http
            .delete(this.project_document_templateApiUrl+"/"+project_document_templateId, {headers: this.headers})
            .toPromise()
            .catch(this.handleError);
    }

    getById(project_document_templateId:string):Promise<ProjectDocumentTemplate>{
        return this.http
            .get(this.project_document_templateApiUrl + "/" + project_document_templateId, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json().project_document_template as ProjectDocumentTemplate;
            })
            .catch(this.handleError);
    }

    update(project_document_template: ProjectDocumentTemplate): Promise<ProjectDocumentTemplate>{
        return this.http
            .post(this.project_document_templateApiUrl + "/" + project_document_template.id, {
                id: project_document_template.id,
                label: project_document_template.label,
                path: project_document_template.path
            }, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().project_document_template as ProjectDocumentTemplate;
            })
            .catch(this.handleError);
    }

    getAll(): Promise<Array<ProjectDocumentTemplate>>{
        return this.http
            .get(this.project_document_templateApiUrl + "s", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().project_document_templates as Array<ProjectDocumentTemplate>;
            })
            .catch(this.handleError);
    }
}