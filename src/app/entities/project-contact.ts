import { Project } from './project';
import { Contact } from './contact';

export class ProjectContact {
  constructor(
    public id?:number,
    public project?:Project,
    public contact?:Contact,
    public contactFullName?:string
  ) {}
}