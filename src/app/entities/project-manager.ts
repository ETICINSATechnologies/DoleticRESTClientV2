import { Project } from './project';
import { User } from './user';

export class ProjectManager {
  constructor(
    public id?:number,
    public project?:Project,
    public manager?:User,
    public managerFullName?:string
  )
}