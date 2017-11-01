import { Delivery } from './delivery';
import { Project } from './project';

export class Task {
  constructor(
    public id?:number,
    public project?:Project,
    public number?:number,
    public name?:string,
    public description?:string,
    public jehAmount?:number,
    public jehCost?:number,
    public startDate?:string,
    public endDate?:string,
    public ended?:boolean,
    public deliveries?:Delivery[]
  ){}
}
