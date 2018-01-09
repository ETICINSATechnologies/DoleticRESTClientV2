import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Response } from '@angular/http';

import { TeamMember } from '../entities/team-member';
import { NewTeamMember } from '../entities/team-member.new';
import { API_SERVER } from '../app.constants';

import 'rxjs/add/operator/toPromise';
import {AuthenticationService} from "./auth.service";

@Injectable()
export class TeamMemberService {
    constructor(private http: Http, private authService: AuthenticationService){}

    private team_memberApiUrl = API_SERVER.rh + 'team_member';
    private headers = this.authService.getHeaders();

    private handleError(error: any): Promise<any> {
        console.error('An error occurred in TeamMemberService: ', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    create(team_member: NewTeamMember):Promise<TeamMember> {
        return this.http
            .post(this.team_memberApiUrl, JSON.stringify(team_member), {headers: this.headers})
            .toPromise()
            .then(res =>{
                return res.json() as TeamMember;
            })
            .catch(this.handleError);
    }

    remove(team_memberId:string):Promise<Response>{
        return this.http
            .delete(this.team_memberApiUrl+"/"+team_memberId, {headers: this.headers})
            .toPromise()
            .catch(this.handleError);
    }

    getById(team_memberId:string):Promise<TeamMember>{
        return this.http
            .get(this.team_memberApiUrl + "/" + team_memberId, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json() as TeamMember;
            })
            .catch(this.handleError);
    }

    getAll(): Promise<Array<TeamMember>>{
        return this.http
            .get(this.team_memberApiUrl + "s", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Array<TeamMember>;
            })
            .catch(this.handleError);
    }

    getAllById(team_memberId:string): Promise<Array<TeamMember>>{
        return this.http
            .get(this.team_memberApiUrl + "s/" + team_memberId, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Array<TeamMember>;
            })
            .catch(this.handleError);
    }
}