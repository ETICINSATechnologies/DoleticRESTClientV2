import {DeliveryDocumentTemplate} from "./delivery-document-template";
import {ProjectContact} from "./project-contact";
import {Delivery} from "./delivery";

export class PublishDeliveryDocument {
    constructor(
      public template: DeliveryDocumentTemplate,
      public contact: ProjectContact,
      public delivery : Delivery
    ){}
}