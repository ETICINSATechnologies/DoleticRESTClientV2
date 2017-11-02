import { User } from './user';
import {Division} from './division';
import {TeamMember} from './team-member';

export class Team{
    constructor(
        public id?:number,
        public name?:string,
        public creationDate?:string,
        public leader?:User,
        public division?:Division,
        public members?:TeamMember[]
    ){

    }
}