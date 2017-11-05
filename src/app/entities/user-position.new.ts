import {Position} from "./position";
import {User} from "./user";

export class NewUserPosition{
    constructor(
        public startDate?:string,
        public active?:boolean,
        public main?:boolean,
        public endDate?:string,
        public position?:Position,
        public user?:User,
    ){

    }
}