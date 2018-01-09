import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Response } from '@angular/http';

import { ProjectManager } from '../entities/project-manager';
import { NewProjectManager } from '../entities/project-manager.new';
import { API_SERVER } from '../app.constants';

import 'rxjs/add/operator/toPromise';
import {AuthenticationService} from "./auth.service";

@Injectable()
export class ProjectManagerService {
    constructor(private http: Http, private authService: AuthenticationService){}

    private project_managerApiUrl = API_SERVER.ua + 'project_manager';
    private headers = this.authService.getHeaders();

    private handleError(error: any): Promise<any> {
        console.error('An error occurred in ProjectManagerService: ', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    create(project_manager: NewProjectManager):Promise<ProjectManager> {
        return this.http
            .post(this.project_managerApiUrl, JSON.stringify(project_manager), {headers: this.headers})
            .toPromise()
            .then(res =>{
                return res.json() as ProjectManager;
            })
            .catch(this.handleError);
    }

    remove(project_managerId:string):Promise<Response>{
        return this.http
            .delete(this.project_managerApiUrl+"/"+project_managerId, {headers: this.headers})
            .toPromise()
            .catch(this.handleError);
    }

    getById(project_managerId:string):Promise<ProjectManager>{
        return this.http
            .get(this.project_managerApiUrl + "/" + project_managerId, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json() as ProjectManager;
            })
            .catch(this.handleError);
    }

    getAll(): Promise<Array<ProjectManager>>{
        return this.http
            .get(this.project_managerApiUrl + "s", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Array<ProjectManager>;
            })
            .catch(this.handleError);
    }

    getAllById(project_managerId:string): Promise<Array<ProjectManager>>{
        return this.http
            .get(this.project_managerApiUrl + "s/" + project_managerId, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Array<ProjectManager>;
            })
            .catch(this.handleError);
    }
}