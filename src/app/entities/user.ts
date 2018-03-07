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
        public schoolYear?:SchoolYear|number,
        public department?:Department|number,
        public gender?:Gender|number,
        public country?:Country|number,
        public recruitmentEvent?:RecruitmentEvent|number,
        public consultantMembership?:ConsultantMembership,
        public administratorMemberships?:AdministratorMembership[]
    ){

    }
}