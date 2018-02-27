import { UserPosition } from './user-position';
import { SchoolYear } from './school-year';
import { Department } from './department';
import { Gender } from './gender';
import {Country} from "./country";
import {RecruitmentEvent} from "./recruitment-event";
import {ConsultantMembership} from "./consultant-membership";
import {AdministratorMembership} from "./administrator-membership";

export class User{
    constructor(
        public username?:string,
        public email?:string,
        public plainPassword?:string,

        public id?:number,
        public positions?:UserPosition[],
        public firstName?:string,
        public lastName?:string,
        public birthDate?:string,
        public tel?:string,
        public address?:string,
        public city?:string,
        public postalCode?:number,
        public schoolYear?:any,
        public department?:any,
        public gender?:any,
        public country?:any,
        public recruitmentEvent?:any,
        public consultantMembership?:ConsultantMembership,
        public administratorMemberships?:AdministratorMembership[]
    ){

    }
}