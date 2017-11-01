import { Project } from './project';

export class ProjectFile {
  constructor(
    public id?:number,
    public project?:Project,
    public label?:string,
    public description?:string,
    public file?:string
  ){}
}