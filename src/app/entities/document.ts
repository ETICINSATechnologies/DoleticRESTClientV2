import { User } from './user';

export class Document {
  constructor(
    public id?:number,
    public auditor?:User,
    public valid?:boolean,
    public file?:string
  ){}
}