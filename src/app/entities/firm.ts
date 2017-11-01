import { Country } from './country';
import { FirmType } from './firm-type';

export class Firm {
  constructor(
    public id?:number,
    public siret?:string,
    public name?:string,
    public address?:string,
    public postalCode?:string,
    public city?:string,
    public lastContact?:string,
    public type?:FirmType[],
    public country?:Country
  ){}
}
