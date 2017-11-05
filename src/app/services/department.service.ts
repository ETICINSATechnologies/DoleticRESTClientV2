import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Response } from '@angular/http';

import { Department } from '../entities/department';
import { NewDepartment } from '../entities/department.new';
import { API_SERVER } from '../app.constants';

import 'rxjs/add/operator/toPromise';
import {AuthenticationService} from "./auth.service";

@Injectable()
export class DepartmentService {
    constructor(private http: Http, private authService: AuthenticationService){}

    private departmentApiUrl = API_SERVER.rh + 'department';
    private headers = this.authService.getHeaders();

    private handleError(error: any): Promise<any> {
        console.error('An error occurred in DepartmentService: ', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    create(department: NewDepartment):Promise<Department> {
        return this.http
            .post(this.departmentApiUrl, JSON.stringify(department), {headers: this.headers})
            .toPromise()
            .then(res =>{
                return res.json().department as Department;
            })
            .catch(this.handleError);
    }

    remove(departmentId:string):Promise<Response>{
        return this.http
            .delete(this.departmentApiUrl+"/"+departmentId, {headers: this.headers})
            .toPromise()
            .catch(this.handleError);
    }

    getById(departmentId:string):Promise<Department>{
        return this.http
            .get(this.departmentApiUrl + "/" + departmentId, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json().department as Department;
            })
            .catch(this.handleError);
    }

    update(department: Department): Promise<Department>{
        return this.http
            .post(this.departmentApiUrl + "/" + department.id, {
                label: department.label,
                detail: department.detail
            }, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().department as Department;
            })
            .catch(this.handleError);
    }

    disable(departmentId: string): Promise<Department>{
        return this.http
            .post(this.departmentApiUrl + "/" + departmentId + "/disable", {}, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().department as Department;
            })
            .catch(this.handleError);
    }

    enable(departmentId: string): Promise<Department>{
        return this.http
            .post(this.departmentApiUrl + "/" + departmentId + "/enable", {}, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().department as Department;
            })
            .catch(this.handleError);
    }

    getByLabel(departmentId: string): Promise<Department>{
        return this.http
            .get(this.departmentApiUrl + "/" + departmentId, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().department as Department;
            })
            .catch(this.handleError);
    }

    getAll(): Promise<Array<Department>>{
        return this.http
            .get(this.departmentApiUrl + "s", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().departments as Array<Department>;
            })
            .catch(this.handleError);
    }

    getAllEnabled(): Promise<Array<Department>>{
        return this.http
            .get(this.departmentApiUrl + "s/enabled", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().departments as Array<Department>;
            })
            .catch(this.handleError);
    }
}