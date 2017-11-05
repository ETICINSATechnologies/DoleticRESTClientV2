import { Injectable } from '@angular/core';
import { Http} from '@angular/http';

import { Amendment } from '../entities/amendment';
import { NewAmendment } from '../entities/amendment.new';
import { Project } from '../entities/project';
import { AmendmentType } from '../entities/amendment-type';
import { API_SERVER } from '../app.constants';

import 'rxjs/add/operator/toPromise';
import {AuthenticationService} from "./auth.service";

@Injectable()
export class AmendmentService {
    constructor(private http: Http, private authService: AuthenticationService){}
    
    private amendmentApiUrl = API_SERVER.ua + 'amendment';
    private headers = this.authService.getHeaders();

    private handleError(error: any): Promise<any> {
        console.error('An error occurred in AmendmentService: ', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    create(amendment: NewAmendment): Promise<Amendment> {
        return this.http
            .post(this.amendmentApiUrl, amendment, {headers: this.headers})
            .toPromise()
            .then(res =>{
                return res.json().amendment as Amendment;
            })
            .catch(this.handleError);
    }

    remove(amendmentId:string):Promise<void>{
        return this.http
            .delete(this.amendmentApiUrl + "/" + amendmentId, {headers: this.headers})
            .toPromise()
            .catch(this.handleError);
    }

    getById(amendmentId:string):Promise<Amendment>{
        return this.http
            .get(this.amendmentApiUrl + "/" + amendmentId, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json().amendment as Amendment;
            })
            .catch(this.handleError);
    }

    update(amendment: Amendment): Promise<Amendment>{
        return this.http
            .post(this.amendmentApiUrl + "/" + amendment.id, amendment, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().amendment as Amendment;
            })
            .catch(this.handleError);
    }

    getAll(): Promise<Array<Amendment>>{
        return this.http
            .get(this.amendmentApiUrl + "s", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().amendments as Array<Amendment>;
            })
            .catch(this.handleError);
    }

    getAllByProject(amendmentProject: Project): Promise<Array<Amendment>>{
        return this.http
            .get(this.amendmentApiUrl + "s/project/" + amendmentProject.id, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().amendment as Array<Amendment>;
            })
            .catch(this.handleError);
    }

    getAllByType(amendmentType: AmendmentType): Promise<Array<Amendment>>{
        return this.http
            .get(this.amendmentApiUrl + "s/type/" + amendmentType.id, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().amendment as Array<Amendment>;
            })
            .catch(this.handleError);
    }
}