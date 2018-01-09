import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Response } from '@angular/http';

import { ProjectContact } from '../entities/project-contact';
import { NewProjectContact } from '../entities/project-contact.new';
import { API_SERVER } from '../app.constants';

import 'rxjs/add/operator/toPromise';
import {AuthenticationService} from "./auth.service";

@Injectable()
export class ProjectContactService {
    constructor(private http: Http, private authService: AuthenticationService){}

    private project_contactApiUrl = API_SERVER.kernel + 'project_contact';
    private headers = this.authService.getHeaders();

    private handleError(error: any): Promise<any> {
        console.error('An error occurred in ProjectContactService: ', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    create(project_contact: NewProjectContact):Promise<ProjectContact> {
        return this.http
            .post(this.project_contactApiUrl, JSON.stringify(project_contact), {headers: this.headers})
            .toPromise()
            .then(res =>{
                return res.json() as ProjectContact;
            })
            .catch(this.handleError);
    }

    remove(project_contactId:string):Promise<Response>{
        return this.http
            .delete(this.project_contactApiUrl+"/"+project_contactId, {headers: this.headers})
            .toPromise()
            .catch(this.handleError);
    }

    getById(project_contactId:string):Promise<ProjectContact>{
        return this.http
            .get(this.project_contactApiUrl + "/" + project_contactId, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json() as ProjectContact;
            })
            .catch(this.handleError);
    }

    getAll(): Promise<Array<ProjectContact>>{
        return this.http
            .get(this.project_contactApiUrl + "s", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Array<ProjectContact>;
            })
            .catch(this.handleError);
    }

    getAllById(project_contactId:string): Promise<Array<ProjectContact>>{
        return this.http
            .get(this.project_contactApiUrl + "s/" + project_contactId, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Array<ProjectContact>;
            })
            .catch(this.handleError);
    }
}