import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Response } from '@angular/http';

import { ProjectOrigin } from '../entities/project-origin';
import { NewProjectOrigin } from '../entities/project-origin.new';
import { API_SERVER } from '../app.constants';

import 'rxjs/add/operator/toPromise';
import {AuthenticationService} from "./auth.service";

@Injectable()
export class ProjectOriginService {
    constructor(private http: Http, private authService: AuthenticationService){}

    private project_originApiUrl = API_SERVER.ua + 'project_origin';
    private headers = this.authService.getHeaders();

    private handleError(error: any): Promise<any> {
        console.error('An error occurred in ProjectOriginService: ', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    create(project_origin: NewProjectOrigin):Promise<ProjectOrigin> {
        return this.http
            .post(this.project_originApiUrl, JSON.stringify(project_origin), {headers: this.headers})
            .toPromise()
            .then(res =>{
                return res.json() as ProjectOrigin;
            })
            .catch(this.handleError);
    }

    remove(project_originId:string):Promise<Response>{
        return this.http
            .delete(this.project_originApiUrl+"/"+project_originId, {headers: this.headers})
            .toPromise()
            .catch(this.handleError);
    }

    getById(project_originId:string):Promise<ProjectOrigin>{
        return this.http
            .get(this.project_originApiUrl + "/" + project_originId, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json() as ProjectOrigin;
            })
            .catch(this.handleError);
    }

    update(project_origin: ProjectOrigin): Promise<ProjectOrigin>{
        return this.http
            .post(this.project_originApiUrl + "/" + project_origin.id, {
                label: project_origin.label,
                detail: project_origin.detail
            }, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as ProjectOrigin;
            })
            .catch(this.handleError);
    }

    getByLabel(project_originLabel: string): Promise<ProjectOrigin>{
        return this.http
            .get(this.project_originApiUrl + "/" + project_originLabel, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as ProjectOrigin;
            })
            .catch(this.handleError);
    }

    getAll(): Promise<Array<ProjectOrigin>>{
        return this.http
            .get(this.project_originApiUrl + "s", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Array<ProjectOrigin>;
            })
            .catch(this.handleError);
    }
}