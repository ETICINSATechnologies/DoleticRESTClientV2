import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Response } from '@angular/http';

import { ProjectField } from '../entities/project-field';
import { NewProjectField } from '../entities/project-field.new';
import { API_SERVER } from '../app.constants';

import 'rxjs/add/operator/toPromise';
import {AuthenticationService} from "./auth.service";

@Injectable()
export class ProjectFieldService {
    constructor(private http: Http, private authService: AuthenticationService){}

    private project_fieldApiUrl = API_SERVER.ua + 'project_field';
    private headers = this.authService.getHeaders();

    private handleError(error: any): Promise<any> {
        console.error('An error occurred in ProjectFieldService: ', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    create(project_field: NewProjectField):Promise<ProjectField> {
        return this.http
            .post(this.project_fieldApiUrl, JSON.stringify(project_field), {headers: this.headers})
            .toPromise()
            .then(res =>{
                return res.json() as ProjectField;
            })
            .catch(this.handleError);
    }

    remove(project_fieldId:string):Promise<Response>{
        return this.http
            .delete(this.project_fieldApiUrl+"/"+project_fieldId, {headers: this.headers})
            .toPromise()
            .catch(this.handleError);
    }

    getById(project_fieldId:string):Promise<ProjectField>{
        return this.http
            .get(this.project_fieldApiUrl + "/" + project_fieldId, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json() as ProjectField;
            })
            .catch(this.handleError);
    }

    update(project_field: ProjectField): Promise<ProjectField>{
        return this.http
            .post(this.project_fieldApiUrl + "/" + project_field.id, {
                label: project_field.label,
                detail: project_field.detail
            }, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as ProjectField;
            })
            .catch(this.handleError);
    }

    disable(project_fieldId: string): Promise<ProjectField>{
        return this.http
            .post(this.project_fieldApiUrl + "/" + project_fieldId + "/disable", {}, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as ProjectField;
            })
            .catch(this.handleError);
    }

    enable(project_fieldId: string): Promise<ProjectField>{
        return this.http
            .post(this.project_fieldApiUrl + "/" + project_fieldId + "/enable", {}, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as ProjectField;
            })
            .catch(this.handleError);
    }

    getByLabel(project_fieldLabel: string): Promise<ProjectField>{
        return this.http
            .get(this.project_fieldApiUrl + "/" + project_fieldLabel, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as ProjectField;
            })
            .catch(this.handleError);
    }

    getAll(): Promise<Array<ProjectField>>{
        return this.http
            .get(this.project_fieldApiUrl + "s", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Array<ProjectField>;
            })
            .catch(this.handleError);
    }

    getAllEnabled(): Promise<Array<ProjectField>>{
        return this.http
            .get(this.project_fieldApiUrl + "s/enabled", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Array<ProjectField>;
            })
            .catch(this.handleError);
    }
}