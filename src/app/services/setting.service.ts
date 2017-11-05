import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Response } from '@angular/http';

import { Setting } from '../entities/setting';
import { NewSetting } from '../entities/setting.new';
import { API_SERVER } from '../app.constants';

import 'rxjs/add/operator/toPromise';
import {AuthenticationService} from "./auth.service";

@Injectable()
export class SettingService {
    constructor(private http: Http, private authService: AuthenticationService){}

    private settingApiUrl = API_SERVER.kernel + 'setting';
    private headers = this.authService.getHeaders();

    private handleError(error: any): Promise<any> {
        console.error('An error occurred in SettingService: ', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    create(setting: NewSetting):Promise<Setting> {
        return this.http
            .post(this.settingApiUrl, JSON.stringify(setting), {headers: this.headers})
            .toPromise()
            .then(res =>{
                return res.json().setting as Setting;
            })
            .catch(this.handleError);
    }

    remove(settingId:string):Promise<Response>{
        return this.http
            .delete(this.settingApiUrl+"/"+settingId, {headers: this.headers})
            .toPromise()
            .catch(this.handleError);
    }

    getById(settingId:string):Promise<Setting>{
        return this.http
            .get(this.settingApiUrl + "/" + settingId, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json().setting as Setting;
            })
            .catch(this.handleError);
    }

    update(setting: Setting): Promise<Setting>{
        return this.http
            .post(this.settingApiUrl + "/" + setting.id, {
                label: setting.label,
                value: setting.value
            }, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().setting as Setting;
            })
            .catch(this.handleError);
    }

    getByLabel(settingLabel: string): Promise<Setting>{
        return this.http
            .get(this.settingApiUrl + "/" + settingLabel, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().setting as Setting;
            })
            .catch(this.handleError);
    }

    getAll(): Promise<Array<Setting>>{
        return this.http
            .get(this.settingApiUrl + "s", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().settings as Array<Setting>;
            })
            .catch(this.handleError);
    }
}