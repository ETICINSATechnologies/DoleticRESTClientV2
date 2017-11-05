import { Project } from './project';
import { User } from './user';

export class NewProjectManager {
    constructor(
        public project?:Project,
        public manager?:User,
        public managerFullName?:string
    ){}
}