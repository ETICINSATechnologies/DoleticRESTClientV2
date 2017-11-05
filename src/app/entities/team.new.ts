import { User } from './user';
import {Division} from './division';
import {TeamMember} from './team-member';

export class NewTeam{
    constructor(
        public name?:string,
        public creationDate?:string,
        public leader?:User,
        public division?:Division,
        public members?:TeamMember[]
    ){

    }
}