import {Division} from "./division";
export class NewPosition{
    constructor(
        public label:string,
        public detail:string,
        public roles:Array<number>,
        public old:boolean,
        public divisionLeader:boolean,
        public president:boolean,
        public treasurer:boolean,
        public division:Division
    ){

    }
}