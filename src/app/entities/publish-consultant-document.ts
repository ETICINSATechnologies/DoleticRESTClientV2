import {ConsultantDocumentTemplate} from "./consultant-document-template";
import {ProjectContact} from "./project-contact";
import {Consultant} from "./consultant";

export class PublishConsultantDocument{
    constructor(
        public template: ConsultantDocumentTemplate,
        public contact: ProjectContact,
        public consultant: Consultant
    ){}
}