import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Response } from '@angular/http';

import { ProjectFile } from '../entities/project-file';

import { API_SERVER } from '../app.constants';

import {AuthenticationService} from "./auth.service";
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ProjectFileService {
  constructor(private http: Http, private authService: AuthenticationService){}

  private project_fileApiUrl = API_SERVER.kernel + 'project_file';
  private headers = this.authService.getHeaders();

  private handleError(error: any): Promise<any> {
      console.error('An error occurred in ProjectFileService: ', error); // for demo purposes only
      return Promise.reject(error.message || error);
  }

  create(project_file: ProjectFile):Promise<ProjectFile> {
      return this.http
          .post(this.project_fileApiUrl, JSON.stringify(project_file), {headers: this.headers})
          .toPromise()
          .then(res =>{
              return res.json() as ProjectFile;
          })
          .catch(this.handleError);
  }

  remove(project_fileId:string):Promise<Response>{
      return this.http
          .delete(this.project_fileApiUrl+"/"+project_fileId, {headers: this.headers})
          .toPromise()
          .catch(this.handleError);
  }

  getById(project_fileId:string):Promise<ProjectFile>{
      return this.http
          .get(this.project_fileApiUrl + "/" + project_fileId, {headers: this.headers})
          .toPromise()
          .then(res => {
              return res.json() as ProjectFile;
          })
          .catch(this.handleError);
  }

  update(project_file: ProjectFile): Promise<ProjectFile>{
      return this.http
          .post(this.project_fileApiUrl + "/" + project_file.id, {
              project: project_file.project,
              label: project_file.label,
              description: project_file.description,
              file: project_file.file
          }, {headers: this.headers})
          .toPromise()
          .then(res=>{
              return res.json() as ProjectFile;
          })
          .catch(this.handleError);
  }

  getAll(): Promise<Array<ProjectFile>>{
      return this.http
          .get(this.project_fileApiUrl + "s", {headers: this.headers})
          .toPromise()
          .then(res=>{
              return res.json() as Array<ProjectFile>;
          })
          .catch(this.handleError);
  }

  getAllValidatedByCurrentUser(): Promise<Array<ProjectFile>>{
        return this.http
            .get(this.project_fileApiUrl + "s/auditor/current", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Array<ProjectFile>;
            })
            .catch(this.handleError);
  }

  getAllValidatedByUser(userId: string): Promise<Array<ProjectFile>>{
      return this.http
          .get(this.project_fileApiUrl + "s/auditor/" + userId, {headers: this.headers})
          .toPromise()
          .then(res=>{
              return res.json() as Array<ProjectFile>;
          })
          .catch(this.handleError);
  }

  getAllByProject(projectId: string): Promise<Array<ProjectFile>>{
        return this.http
            .get(this.project_fileApiUrl + "s/project/" + projectId, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json() as Array<ProjectFile>;
            })
            .catch(this.handleError);
  }

}
