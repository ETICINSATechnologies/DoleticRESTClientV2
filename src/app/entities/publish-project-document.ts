import {ProjectDocumentTemplate} from "./project-document-template";
import {Project} from "./project";
import {ProjectManager} from "./project-manager";
import {ProjectContact} from "./project-contact";
import {Consultant} from "./consultant";
export class PublishProjectDocument{
    constructor(
      public template: ProjectDocumentTemplate,
      public project: Project,
      public manager: ProjectManager,
      public contact: ProjectContact,
      public consultant: Consultant
    ){}
}