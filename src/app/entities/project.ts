
import {Amendment} from 'amendment';
import { Consultant } from 'consultant';
import { Contact } from 'contact';
import { Firm } from 'firm';
import { ProjectDocument } from 'projectdocument';
import { ProjectField } from 'projectfield';
import { ProjectFile } from 'projectfile';
import { ProjectOrigin } from 'projectorigin';
import { Task } from 'task';
import { User } from 'user';

export class Project {
  constructor(
    public id?:number,
    public number?:number,
    public name?:string,
    public description?:string,
    public signDate?:string,
    public endDate?:string,
    public managementFee?:number,
    public applicationFee?:number,
    public rebilledFee?:number,
    public advance?:number,
    public expectedDuration?:number,
    public secret?:boolean,
    public critical?:boolean,
    public creationDate?:string,
    public lastUpdate?:string,
    public disabled?:boolean,
    public disabledSince?:string,
    public disabledUntil?:string,
    public archived?:boolean,
    public archivedSince?:string,
    public firm?:Firm,
    public auditor?:User,
    public managers?:Array<User>,
    public contacts?:Array<Contact>,
    public consultants?:Array<Consultant>,
    public field?:Array<ProjectField>,
    public origin?:Array<ProjectOrigin>,
    public status?:string,
    public tasks?:Array<Task>,
    public amendments?:Array<Amendment>,
    public documents?:Array<ProjectDocument>,
    public files?:Array<ProjectFile>,
    public userHasRights?:boolean
  ) {}
}

