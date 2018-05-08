/**
 * Created by Julien on 08/11/2017.
 */
import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Response } from '@angular/http';

import { User } from '../entities/user';
import { API_SERVER } from '../app.constants';

import 'rxjs/add/operator/toPromise';
import {AuthenticationService} from "./auth.service";
import {EditPassword} from "../entities/edit-password";

@Injectable()
export class UserService {
    constructor(private http: Http, private authService: AuthenticationService){}

    private userApiUrl = API_SERVER.kernel + 'user';
    private currentUserApiUrl = this.userApiUrl + '/current';
    private usersApiUrl = this.userApiUrl + 's';
    private headers = this.authService.getHeaders();

    private handleError(error: any): Promise<any> {
        console.error('An error occurred in UserService: ', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    create(user: User):Promise<User> {
        return this.http
            .post(this.userApiUrl, JSON.stringify(user), {headers: this.headers})
            .toPromise()
            .then(res =>{
                return res.json() as User;
            })
            .catch(this.handleError);
    }

    remove(userId:string):Promise<Response>{
        return this.http
            .delete(this.userApiUrl+"/"+userId, {headers: this.headers})
            .toPromise()
            .catch(this.handleError);
    }

    getById(userId:string):Promise<User>{
        return this.http
            .get(this.userApiUrl + "/" + userId, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json() as User;
            })
            .catch(this.handleError);
    }

    getCurrent():Promise<User>{
        return this.http
            .get(this.userApiUrl + "/current", {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json() as User;
            })
            .catch(this.handleError);
    }

    getByMail(userMail:string):Promise<User>{
        return this.http
            .get(this.userApiUrl + "/" + userMail, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json() as User;
            })
            .catch(this.handleError);
    }

    getByName(username:string):Promise<User>{
        return this.http
            .get(this.userApiUrl + "/" + username, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json() as User;
            })
            .catch(this.handleError);
    }

    update(user: User): Promise<User>{
        return this.http
            .post(this.userApiUrl + "/" + user.id, user, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as User;
            })
            .catch(this.handleError);
    }

    disable(userId: string): Promise<User>{
        return this.http
            .get(this.userApiUrl + "/" + userId+ "/disable", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as User;
            })
            .catch(this.handleError);
    }

    enable(userId: string): Promise<User>{
        return this.http
            .post(this.userApiUrl + "/" + userId + "/enable", {}, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as User;
            })
            .catch(this.handleError);
    }

    editCurrent(user: User): Promise<User>{
        return this.http
            .post(this.userApiUrl + "/current", user, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as User;
            })
            .catch(this.handleError);
    }

    editCurrentPassword(editPass:EditPassword): Promise<User>{
        return this.http
            .post(this.userApiUrl + "/current/password", editPass, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as User;
            })
            .catch(this.handleError);
    }

    getAll(): Promise<Array<User>>{
        return this.http
            .get(this.userApiUrl + "s", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Array<User>;
            })
            .catch(this.handleError);
    }

    getAllCurrent(): Promise<Array<User>>{
        return this.http
            .get(this.usersApiUrl + "/current", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Array<User>;
            })
            .catch(this.handleError);
    }

    getAllDisable(): Promise<Array<User>>{
        return this.http
            .get(this.usersApiUrl + "/disable", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Array<User>;
            })
            .catch(this.handleError);
    }

    getAllOld(): Promise<Array<User>>{
        return this.http
            .get(this.usersApiUrl + "/old", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Array<User>;
            })
            .catch(this.handleError);
    }

    getTableData(path: string): Promise<any> {
        return this.http
            .get(this.userApiUrl + path, {headers: this.headers})
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }
}