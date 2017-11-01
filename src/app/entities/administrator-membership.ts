import { User } from './user';

export class AdministratorMembership {
  constructor(
    public id?:number,
    public user?:User,
    public startDate?:string,
    public endDate?:string,
    public feePaid?:boolean,
    public formFilled?:boolean,
    public valid?:boolean,
    public active?:boolean
  ) {}
}