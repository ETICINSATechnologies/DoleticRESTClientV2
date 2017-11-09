import { Injectable } from '@angular/core';
import { Http} from '@angular/http';

import { Position } from '../entities/position';
import { NewPosition } from '../entities/position.new';
import { API_SERVER } from '../app.constants';

import 'rxjs/add/operator/toPromise';
import {AuthenticationService} from "./auth.service";

@Injectable()
export class PositionService {
    constructor(private http: Http, private authService: AuthenticationService){}

    private positionApiUrl = API_SERVER.kernel + 'position';
    private headers = this.authService.getHeaders();

    private handleError(error: any): Promise<any> {
        console.error('An error occurred in PositionService: ', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    create(position: NewPosition):Promise<Position> {
        return this.http
            .post(this.positionApiUrl, JSON.stringify(position), {headers: this.headers})
            .toPromise()
            .then(res =>{
                return res.json().position as Position;
            })
            .catch(this.handleError);
    }

    remove(positionId:string):Promise<Response>{
        return this.http
            .delete(this.positionApiUrl+"/"+positionId, {headers: this.headers})
            .toPromise()
            .catch(this.handleError);
    }

    getById(positionId:string):Promise<Position>{
        return this.http
            .get(this.positionApiUrl + "/" + positionId, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json().position as Position;
            })
            .catch(this.handleError);
    }

    update(position: Position): Promise<Position>{
        return this.http
            .post(this.positionApiUrl + "/" + position.id, JSON.stringify(position), {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().position as Position;
            })
            .catch(this.handleError);
    }

    getByLabel(positionLabel: string): Promise<Position>{
        return this.http
            .get(this.positionApiUrl + "/" + positionLabel, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().position as Position;
            })
            .catch(this.handleError);
    }

    getAll(): Promise<Array<Position>>{
        return this.http
            .get(this.positionApiUrl + "s", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().positions as Array<Position>;
            })
            .catch(this.handleError);
    }
}