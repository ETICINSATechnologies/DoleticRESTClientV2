import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Response } from '@angular/http';

import { ProjectDocument } from '../entities/project-document';

import { API_SERVER } from '../app.constants';

import {AuthenticationService} from "./auth.service";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProjectDocumentService{
  constructor(private http: Http, private authService: AuthenticationService){}

  private project_documentApiUrl = API_SERVER.kernel + 'project_document';
  private headers = this.authService.getHeaders();

  private handleError(error: any): Promise<any> {
      console.error('An error occurred in ProjectDocumentService: ', error); // for demo purposes only
      return Promise.reject(error.message || error);
  }

  create(project_document: ProjectDocument):Promise<ProjectDocument> {
      return this.http
          .post(this.project_documentApiUrl, JSON.stringify(project_document), {headers: this.headers})
          .toPromise()
          .then(res =>{
              return res.json().project_document as ProjectDocument;
          })
          .catch(this.handleError);
  }

  remove(project_documentId:string):Promise<Response>{
      return this.http
          .delete(this.project_documentApiUrl+"/"+project_documentId, {headers: this.headers})
          .toPromise()
          .catch(this.handleError);
  }

  getById(project_documentId:string):Promise<ProjectDocument>{
      return this.http
          .get(this.project_documentApiUrl + "/" + project_documentId, {headers: this.headers})
          .toPromise()
          .then(res => {
              return res.json().project_document as ProjectDocument;
          })
          .catch(this.handleError);
  }

  update(project_document: ProjectDocument): Promise<ProjectDocument>{
      return this.http
          .post(this.project_documentApiUrl + "/" + project_document.id, {
              auditor: project_document.auditor,
              valid: project_document.valid,
              file: project_document.file
          }, {headers: this.headers})
          .toPromise()
          .then(res=>{
              return res.json().project_document as ProjectDocument;
          })
          .catch(this.handleError);
  }

  download(project_documentId: string): Promise<Response>{
        return this.http
            .get(this.project_documentApiUrl + "/" + project_documentId+ "/download", {headers: this.headers})
            .toPromise()
            .catch(this.handleError);
  }

  getAll(): Promise<Array<ProjectDocument>>{
      return this.http
          .get(this.project_documentApiUrl + "s", {headers: this.headers})
          .toPromise()
          .then(res=>{
              return res.json().project_documents as Array<ProjectDocument>;
          })
          .catch(this.handleError);
  }

  getAllValidatedByCurrentUser(): Promise<Array<ProjectDocument>>{
        return this.http
            .get(this.project_documentApiUrl + "s/auditor/current", {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().project_documents as Array<ProjectDocument>;
            })
            .catch(this.handleError);
  }

  getAllValidatedByUser(userId: string): Promise<Array<ProjectDocument>>{
      return this.http
          .get(this.project_documentApiUrl + "s/auditor/" + userId, {headers: this.headers})
          .toPromise()
          .then(res=>{
              return res.json().project_documents as Array<ProjectDocument>;
          })
          .catch(this.handleError);
  }

  getAllByProject(projectId: string): Promise<Array<ProjectDocument>>{
        return this.http
            .get(this.project_documentApiUrl + "s/project/" + projectId, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().project_documents as Array<ProjectDocument>;
            })
            .catch(this.handleError);
  }

  getAllFromTemplate(templateId: string): Promise<Array<ProjectDocument>>{
        return this.http
            .get(this.project_documentApiUrl + "s/template/" + templateId, {headers: this.headers})
            .toPromise()
            .then(res=>{
                return res.json().project_documents as Array<ProjectDocument>;
            })
            .catch(this.handleError);
  }
}
