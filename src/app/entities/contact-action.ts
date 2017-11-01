import { Contact } from './contact';
import { ContactActionType } from './contact-action-type';
import { User } from './user';

export class ContactAction {
  constructor(
    public id?:number,
    public date?:string,
    public notes?:string,
    public replied?:boolean,
    public type?:ContactActionType,
    public contact?:Contact,
    public prospector?:User,
  ){}
}
