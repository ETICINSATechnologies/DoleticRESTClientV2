import { User } from './user';
import { Team } from './team';

export class TeamMember{
    constructor(
        public id?:number,
        public team?:Team,
        public user?:User
    ){

    }
}