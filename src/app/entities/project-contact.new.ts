import { Project } from './project';
import { Contact } from './contact';

export class NewProjectContact {
    constructor(
        public project?:Project,
        public contact?:Contact,
        public contactFullName?:string
    ) {}
}