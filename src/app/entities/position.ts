import {Division} from "./division";
export class Position{
    constructor(
        public id:number,
        public label:string,
        public detail:string,
        public roles:Array<number>,
        public division:Division,
        public old:boolean,
        public division_leader:boolean,
        public president:boolean,
        public treasurer:boolean
    ){

    }
}