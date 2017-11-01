import { Project } from '../entities/project';
import { AmendmentType } from '../entities/amendment-type';

export class Amendment{
    constructor(
        public id?:number,
        public project?:Project,
        public types?:AmendmentType[],
        public content?:string,
        public attributable?: boolean,
        public date?: string
    ){

    }
}