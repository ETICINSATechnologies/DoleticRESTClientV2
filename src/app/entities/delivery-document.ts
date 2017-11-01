import { Document } from './document';
import { Delivery } from './delivery';
import { DeliveryDocumentTemplate } from './delivery-document-template';
import { User } from './user';

export class DeliveryDocument extends Document {
  constructor(
    id?:number,
    auditor?:User,
    valid?:boolean,
    file?:string,

    public delivery?:Delivery,
    public template?:DeliveryDocumentTemplate
  ){
    super(id, auditor, valid, file);
  }
}