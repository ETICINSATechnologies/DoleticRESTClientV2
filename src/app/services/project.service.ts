import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Response } from '@angular/http';

import { Project } from '../entities/project';

import { API_SERVER } from '../app.constants';

import {AuthenticationService} from "./auth.service";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProjectService{
  constructor(private http: Http, private authService: AuthenticationService){}

  private projectApiUrl = API_SERVER.ua + 'project';
  private headers = this.authService.getHeaders();

  private handleError(error: any): Promise<any> {
      console.error('An error occurred in ProjectService: ', error); // for demo purposes only
      return Promise.reject(error.message || error);
  }

  create(project: Project): Promise<Project> {
      return this.http
          .post(this.projectApiUrl, project, {headers: this.headers})
          .toPromise()
          .then(res => {
              return res.json() as Project;
          })
          .catch(this.handleError);
  }

  getByNumber(projectNumber: string): Promise<Project> {
      return this.http
          .get(this.projectApiUrl + "/number/" + projectNumber, {headers: this.headers})
          .toPromise()
          .then(res => {
              return res.json() as Project;
          })
          .catch(this.handleError);
  }

  remove(projectId: string): Promise<Response> {
      return this.http
          .delete(this.projectApiUrl + "/" + projectId, {headers: this.headers})
          .toPromise()
          .catch(this.handleError);
  }

  getById(projectId: string): Promise<Project> {
      return this.http
          .get(this.projectApiUrl + "/" + projectId, {headers: this.headers})
          .toPromise()
          .then(res => {
              return res.json() as Project;
          })
          .catch(this.handleError);
  }

  update(project: Project): Promise<Project> {
      return this.http
          .post(this.projectApiUrl + "/" + project.id, project, {headers: this.headers})
          .toPromise()
          .then(res => {
              return res.json() as Project;
          })
          .catch(this.handleError);
  }

  archive(project: Project): Promise<Project> {
        return this.http
          .post(this.projectApiUrl + "/" + project.id + "/archive", project, {headers: this.headers})
          .toPromise()
          .then(res => {
              return res.json() as Project;
          })
          .catch(this.handleError);
    }

    setAuditor(project: Project): Promise<Project> {
      return this.http
      .post(this.projectApiUrl + "/" + project.id + "/auditor", project, {headers: this.headers})
      .toPromise()
      .then(res => {
          return res.json() as Project;
      })
      .catch(this.handleError);
    }

    disable(projectId: string): Promise<Project>{
        return this.http
            .post(this.projectApiUrl + "/" + projectId + "/disable", {}, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Project;
            })
            .catch(this.handleError);
    }

    enable(projectId: string): Promise<Project>{
        return this.http
            .post(this.projectApiUrl + "/" + projectId + "/enable", {}, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Project;
            })
            .catch(this.handleError);
    }

    end(projectId: string): Promise<Project>{
        return this.http
            .post(this.projectApiUrl + "/" + projectId+ "/end", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Project;
            })
            .catch(this.handleError);
    }

    sign(projectId: string): Promise<Project>{
        return this.http
            .post(this.projectApiUrl + "/" + projectId+ "/sign", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Project;
            })
            .catch(this.handleError);
    }

    unArchive(projectId: string): Promise<Project>{
        return this.http
            .post(this.projectApiUrl + "/" + projectId+ "/unarchive", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Project;
            })
            .catch(this.handleError);
    }

    unEnd(projectId: string): Promise<Project>{
        return this.http
            .post(this.projectApiUrl + "/" + projectId+ "/unend", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Project;
            })
            .catch(this.handleError);
    }

    unSign(projectId: string): Promise<Project>{
        return this.http
            .post(this.projectApiUrl + "/" + projectId + "/unsign", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Project;
            })
            .catch(this.handleError);
    }

    getAll(): Promise<Array<Project>>{
        return this.http
            .get(this.projectApiUrl + "s", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Array<Project>;
            })
            .catch(this.handleError);
    }

    getAllArchived(): Promise<Array<Project>>{
        return this.http
            .get(this.projectApiUrl + "s/archived", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Array<Project>;
            })
            .catch(this.handleError);
    }

    getAllByAuditor(auditorId: string): Promise<Array<Project>>{
        return this.http
            .get(this.projectApiUrl + "s/auditor/" + auditorId, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Array<Project>;
            })
            .catch(this.handleError);
    }

    getAllByConsultant(consultantId: string): Promise<Array<Project>>{
        return this.http
            .get(this.projectApiUrl + "s/consultant/" + consultantId, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Array<Project>;
            })
            .catch(this.handleError);
    }

    getAllCurrent(): Promise<Array<Project>>{
        return this.http
            .get(this.projectApiUrl + "s/current", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Array<Project>;
            })
            .catch(this.handleError);
    }

    getAllDisabled(): Promise<Array<Project>>{
        return this.http
            .get(this.projectApiUrl + "s/disabled", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Array<Project>;
            })
            .catch(this.handleError);
    }

    getAllByField(fieldId: string): Promise<Array<Project>>{
        return this.http
            .get(this.projectApiUrl + "s/field/" + fieldId, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Array<Project>;
            })
            .catch(this.handleError);
    }

    getAllByManager(managerId: string): Promise<Array<Project>>{
        return this.http
            .get(this.projectApiUrl + "s/manager/" + managerId, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Array<Project>;
            })
            .catch(this.handleError);
    }

    getAllByOrigin(originId: string): Promise<Array<Project>>{
        return this.http
            .get(this.projectApiUrl + "s/origin/" + originId, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Array<Project>;
            })
            .catch(this.handleError);
    }

    getAllByFirm(firmId: string): Promise<Array<Project>>{
        return this.http
            .get(this.projectApiUrl + "s/status/" + firmId, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Array<Project>;
            })
            .catch(this.handleError);
    }

    getAllUnsigned(): Promise<Array<Project>>{
        return this.http
            .get(this.projectApiUrl + "s/unsigned", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Array<Project>;
            })
            .catch(this.handleError);
    }

}
