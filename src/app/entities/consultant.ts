import { ConsultantDocument } from './consultant-document';
import { Project } from './project';
import { User } from './user';

export class Consultant {
  constructor(
    public id?:number,
    public project?:Project,
    public user?:User,
    public number?:number,
    public jehAssigned?:number,
    public payByJeh?:number,
    public documents?:ConsultantDocument[],
    public consultantFullName?:string
  ){}
}
