import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Response } from '@angular/http';

import { UserPosition } from '../entities/user-position';
import { NewUserPosition } from '../entities/user-position.new';
import { API_SERVER } from '../app.constants';

import 'rxjs/add/operator/toPromise';
import {AuthenticationService} from "./auth.service";

@Injectable()
export class UserPositionService {
    constructor(private http: Http, private authService: AuthenticationService){}

    private user_positionApiUrl = API_SERVER.kernel + 'user_position';
    private headers = this.authService.getHeaders();

    private handleError(error: any): Promise<any> {
        console.error('An error occurred in UserPositionService: ', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    create(user_position: NewUserPosition):Promise<UserPosition> {
        return this.http
            .post(this.user_positionApiUrl, JSON.stringify(user_position), {headers: this.headers})
            .toPromise()
            .then(res =>{
                return res.json().user_position as UserPosition;
            })
            .catch(this.handleError);
    }

    remove(user_positionId:string):Promise<Response>{
        return this.http
            .delete(this.user_positionApiUrl+"/"+user_positionId, {headers: this.headers})
            .toPromise()
            .catch(this.handleError);
    }

    getById(user_positionId:string):Promise<UserPosition>{
        return this.http
            .get(this.user_positionApiUrl + "/" + user_positionId, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json().user_position as UserPosition;
            })
            .catch(this.handleError);
    }

    getByUser(userId:string):Promise<UserPosition>{
        return this.http
            .get(this.user_positionApiUrl + "/user/" + userId, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json().user_position as UserPosition;
            })
            .catch(this.handleError);
    }

    disable(user_positionId: string): Promise<UserPosition>{
        return this.http
            .post(this.user_positionApiUrl + "/" + user_positionId + "/disable", {}, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().user_position as UserPosition;
            })
            .catch(this.handleError);
    }

    enable(user_positionId: string): Promise<UserPosition>{
        return this.http
            .post(this.user_positionApiUrl + "/" + user_positionId + "/enable", {}, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().user_position as UserPosition;
            })
            .catch(this.handleError);
    }

    setAsMain(user_position: UserPosition): Promise<UserPosition>{
        return this.http
            .post(this.user_positionApiUrl + "/" + user_position.id + "/main", {
                position : user_position.position,
                user : user_position.user,
                main : user_position.main
            }, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().user_position as UserPosition;
            })
            .catch(this.handleError);
    }

    getAll(): Promise<Array<UserPosition>>{
        return this.http
            .get(this.user_positionApiUrl + "s", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().user_positions as Array<UserPosition>;
            })
            .catch(this.handleError);
    }
}