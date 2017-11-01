import { Document } from './document';
import { Project } from './project';
import { ProjectDocumentTemplate } from './project-document-template';
import { User } from './user';

export class ProjectDocument extends Document {
  constructor(
    id?:number,
    auditor?:User,
    valid?:boolean,
    file?:string,

    public project?:Project,
    public template?:ProjectDocumentTemplate
  ){
    super(id, auditor, valid, file);
  }
}