/**
 * Created by Julien on 08/11/2017.
 */
import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Response } from '@angular/http';

import { Task } from '../entities/task';
import { API_SERVER } from '../app.constants';

import 'rxjs/add/operator/toPromise';
import {AuthenticationService} from "./auth.service";

@Injectable()
export class TaskService {
    constructor(private http: Http, private authService: AuthenticationService){}

    private taskApiUrl = API_SERVER.ua + 'task';
    private tasksApiUrl = this.taskApiUrl + 's';
    private headers = this.authService.getHeaders();

    private handleError(error: any): Promise<any> {
        console.error('An error occurred in TaskService: ', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    create(task: Task):Promise<Task> {
        return this.http
            .post(this.taskApiUrl, JSON.stringify(task), {headers: this.headers})
            .toPromise()
            .then(res =>{
                return res.json().task as Task;
            })
            .catch(this.handleError);
    }

    remove(taskId:string):Promise<Response>{
        return this.http
            .delete(this.taskApiUrl+"/"+taskId, {headers: this.headers})
            .toPromise()
            .catch(this.handleError);
    }

    getById(taskId:string):Promise<Task>{
        return this.http
            .get(this.taskApiUrl + "/" + taskId, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json().task as Task;
            })
            .catch(this.handleError);
    }

    getAllByProjectId(projectId:string):Promise<Array<Task>>{
        return this.http
            .get(this.tasksApiUrl + "/project/" + projectId, {headers: this.headers})
            .toPromise()
            .then(res => {
                return res.json().tasks as Array<Task>;
            })
            .catch(this.handleError);
    }

    update(task: Task): Promise<Task>{
        return this.http
            .post(this.taskApiUrl + "/" + task.id, task, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().task as Task;
            })
            .catch(this.handleError);
    }

    end(taskId: string): Promise<Task>{
        return this.http
            .get(this.taskApiUrl + "/" + taskId+ "/end", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().task as Task;
            })
            .catch(this.handleError);
    }

    switch(taskId: string, taskId2: string): Promise<Task>{
        return this.http
            .post(this.taskApiUrl + "/" + taskId + "/switch" + taskId2, {}, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().task as Task;
            })
            .catch(this.handleError);
    }

    editCurrent(task: Task): Promise<Task>{
        return this.http
            .post(this.taskApiUrl + "/current", task, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().task as Task;
            })
            .catch(this.handleError);
    }

    unend(taskId: string): Promise<Task>{
        return this.http
            .get(this.taskApiUrl + "/" + taskId+ "/unend", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().task as Task;
            })
            .catch(this.handleError);
    }

    getAll(): Promise<Array<Task>>{
        return this.http
            .get(this.taskApiUrl + "s", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().tasks as Array<Task>;
            })
            .catch(this.handleError);
    }
}