import { Project } from './project';
import { ProjectDocumentTemplate } from './project-document-template';

export class ProjectDocument {
  constructor(
    public project?:Project,
    public template?:ProjectDocumentTemplate,
  ){}
}