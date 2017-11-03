import { Project } from './project';
import { AmendmentType } from './amendment-type';

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