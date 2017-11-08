import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Response } from '@angular/http';

import { RecruitmentEvent } from '../entities/recruitment-event';
import { NewRecruitmentEvent } from '../entities/recruitment-event.new';
import { API_SERVER } from '../app.constants';

import 'rxjs/add/operator/toPromise';
import {AuthenticationService} from "./auth.service";

@Injectable()
export class RecruitmentEventService {
    constructor(private http: Http, private authService: AuthenticationService){}

    private recruitment_eventApiUrl = API_SERVER.rh + 'recruitment_event';
    private headers = this.authService.getHeaders();

    private handleError(error: any): Promise<any> {
        console.error('An error occurred in RecruitmentEventService: ', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    create(recruitment_event: NewRecruitmentEvent):Promise<RecruitmentEvent> {
        return this.http
            .post(this.recruitment_eventApiUrl, JSON.stringify(recruitment_event), {headers: this.headers})
            .toPromise()
            .then(res =>{
                return res.json().recruitment_event as RecruitmentEvent;
            })
            .catch(this.handleError);
    }

    remove(recruitment_eventId:string):Promise<Response>{
        return this.http
            .delete(this.recruitment_eventApiUrl+"/"+recruitment_eventId, {headers: this.headers})
            .toPromise()
            .catch(this.handleError);
    }

    getById(recruitment_eventId:string):Promise<RecruitmentEvent>{
        return this.http
            .get(this.recruitment_eventApiUrl + "/" + recruitment_eventId, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json().recruitment_event as RecruitmentEvent;
            })
            .catch(this.handleError);
    }

    getByDate(recruitment_eventDate:string):Promise<RecruitmentEvent>{
        return this.http
            .get(this.recruitment_eventApiUrl + "/" + recruitment_eventDate, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json().recruitment_event as RecruitmentEvent;
            })
            .catch(this.handleError);
    }

    update(recruitment_event: RecruitmentEvent): Promise<RecruitmentEvent>{
        return this.http
            .post(this.recruitment_eventApiUrl + "/" + recruitment_event.id, {
                year: recruitment_event.date
            }, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().recruitment_event as RecruitmentEvent;
            })
            .catch(this.handleError);
    }

    getAll(): Promise<Array<RecruitmentEvent>>{
        return this.http
            .get(this.recruitment_eventApiUrl + "s", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().recruitment_events as Array<RecruitmentEvent>;
            })
            .catch(this.handleError);
    }
}