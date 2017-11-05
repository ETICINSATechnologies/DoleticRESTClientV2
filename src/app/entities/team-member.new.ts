import { User } from './user';
import { Team } from './team';

export class NewTeamMember{
    constructor(
        public team?:Team,
        public user?:User
    ){

    }
}