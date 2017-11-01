import { Consultant } from './consultant';
import { ConsultantDocumentTemplate } from './consultant-document-template';
import { Document } from './document';
import { User } from './user';

export class ConsultantDocument extends Document{
  constructor(
    id?:number,
    auditor?:User,
    valid?:boolean,
    file?:string,

    public consultant?:Consultant,
    public consultantDocumentTemplate?:ConsultantDocumentTemplate
  ){
    super(id, auditor, valid, file);
  }
}