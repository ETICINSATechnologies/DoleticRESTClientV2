import { Contact } from './contact';
import { ContactActionType } from './contact-action-type';
import { User } from './user';

export class ContactAction {
  constructor(
    private id?:number,
    private date?:string,
    private notes?:string,
    private replied?:boolean,
    private type?:ContactActionType,
    private contact?:Contact,
    private prospector?:User,
  ){}
}
