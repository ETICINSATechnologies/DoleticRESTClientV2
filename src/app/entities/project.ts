import { Amendement } from '../entities/amendement';
import { Consultant } from '../entities/consultant';
import { Firm } from '../entities/firm';
import { ProjectContact } from '../entities/project-contact';
import { ProjectDocument } from '../entities/project-document';
import { ProjectField } from '../entities/project-field';
import { ProjectFile } from '../entities/project-file';
import { ProjectOrigin } from '../entities/project-origin';
import { Task } from '../entities/task';
import { User } from '../entities/user';

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
    public managers?:User[],
    public contacts?:ProjectContact[],
    public consultants?:Consultant[],
    public field?:ProjectField[],
    public origin?:ProjectOrigin[],
    public status?:string,
    public tasks?:Task[],
    public amendments?:Amendement[],
    public documents?:ProjectDocument[],
    public files?:ProjectFile[],
    public userHasRights?:boolean
  ) {}
}

