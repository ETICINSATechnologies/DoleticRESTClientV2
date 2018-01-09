import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Response } from '@angular/http';

import { Team } from '../entities/team';
import { NewTeam } from '../entities/team.new';
import { API_SERVER } from '../app.constants';

import 'rxjs/add/operator/toPromise';
import {AuthenticationService} from "./auth.service";

@Injectable()
export class TeamService {
    constructor(private http: Http, private authService: AuthenticationService){}

    private teamApiUrl = API_SERVER.rh + 'team';
    private headers = this.authService.getHeaders();

    private handleError(error: any): Promise<any> {
        console.error('An error occurred in TeamService: ', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    create(team: NewTeam):Promise<Team> {
        return this.http
            .post(this.teamApiUrl, JSON.stringify(team), {headers: this.headers})
            .toPromise()
            .then(res =>{
                return res.json() as Team;
            })
            .catch(this.handleError);
    }

    remove(teamId:string):Promise<Response>{
        return this.http
            .delete(this.teamApiUrl+"/"+teamId, {headers: this.headers})
            .toPromise()
            .catch(this.handleError);
    }

    getById(teamId:string):Promise<Team>{
        return this.http
            .get(this.teamApiUrl + "/" + teamId, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json() as Team;
            })
            .catch(this.handleError);
    }

    getByName(name:string):Promise<Team>{
        return this.http
            .get(this.teamApiUrl + "/" + name, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json() as Team;
            })
            .catch(this.handleError);
    }

    update(team: Team): Promise<Team>{
        return this.http
            .post(this.teamApiUrl + "/" + team.id, {
                leader: team.leader,
                division: team.division,
                name: team.name
            }, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Team;
            })
            .catch(this.handleError);
    }

    getAll(): Promise<Array<Team>>{
        return this.http
            .get(this.teamApiUrl + "s", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Array<Team>;
            })
            .catch(this.handleError);
    }

    getAllInDivision(divisionId:string): Promise<Array<Team>>{
        return this.http
            .get(this.teamApiUrl + "s/division/" + divisionId, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Array<Team>;
            })
            .catch(this.handleError);
    }

    getAllLedByUser(userId:string): Promise<Array<Team>>{
        return this.http
            .get(this.teamApiUrl + "s/leader/" + userId, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Array<Team>;
            })
            .catch(this.handleError);
    }

    getAllUserBelongsTo(memberId:string): Promise<Array<Team>>{
        return this.http
            .get(this.teamApiUrl + "s/member/" + memberId, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Array<Team>;
            })
            .catch(this.handleError);
    }
}