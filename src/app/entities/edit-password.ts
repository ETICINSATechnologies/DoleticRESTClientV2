import {NewPassword} from "./password.new";

export class EditPassword{
    constructor(
        public old: string,
        public newPass: NewPassword
    ){}
}