import { ContactAction } from './contact-action';
import { ContactType } from './contact-type';
import { Firm } from './firm';
import { Gender } from './gender';
import { User } from './user';

export class Contact {
  constructor(
    public id?: number,
    public firstName?: string,
    public lastName?: string,
    public email?:string,
    public phone?: string,
    public cellPhone?: string,
    public role?: string,
    public origin?: string,
    public fromProspecting?: boolean,
    public error?: boolean,
    public satisfied?: boolean,
    public notes?: string,
    public nextProspecting?: string,
    public creationDate?: string,
    public lastUpdate?: string,
    public type?: ContactType,
    public gender?: Gender,
    public firm?: Firm,
    public prospector?: User,
    public creator?: User,
    public actions?: ContactAction[],
    public fullName?: string
  ){
  }
}