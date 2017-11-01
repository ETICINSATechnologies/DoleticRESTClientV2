import { ConsultantDocument } from './consultant-document';
import { Project } from './project';
import { User } from './user';

export class Consultant {
  constructor(
    private id?:number,
    private project?:Project,
    private user?:User,
    private number?:number,
    private jehAssigned?:number,
    private payByJeh?:number,
    private documents?:ConsultantDocument[],
    private consultantFullName?:string
  ){}
}
