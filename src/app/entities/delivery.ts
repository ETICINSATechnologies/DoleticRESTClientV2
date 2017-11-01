import { DeliveryDocument } from "./delivery-document";
import { Task } from "./task";

export class Delivery {
  constructor(
    public id?:number,
    public task?:Task,
    public number?:number,
    public content?:string,
    public delivered?:boolean,
    public deliveryDate?:string,
    public billed?:boolean,
    public paid?:boolean,
    public paymentDate?:string,
    public documents?:DeliveryDocument[]
  ){}
}
