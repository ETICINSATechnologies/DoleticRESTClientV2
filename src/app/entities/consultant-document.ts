import { Consultant } from './consultant';
import { ConsultantDocumentTemplate } from './consultant-document-template';

export class ConsultantDocument {
  constructor(
    public consultant?:Consultant,
    public consultantDocumentTemplate?:ConsultantDocumentTemplate
  ){}
}