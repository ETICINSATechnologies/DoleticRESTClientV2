import { User } from './user';

export class NewConsultantMembership {
    constructor(
        public id?:number,
        public user?:User,
        public startDate?:string,
        public socialNumber?:string,
        public feePaid?:boolean,
        public formFilled?:boolean,
        public certificateGiven?:boolean,
        public ribGiven?:boolean,
        public idGiven?:boolean,
        public valid?:boolean
    ) {}
}