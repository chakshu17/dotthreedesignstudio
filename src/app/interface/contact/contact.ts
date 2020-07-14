import { EmailValidator } from '@angular/forms';

export interface Contact {
  id?:string;
  name:string;
  email:string;
  phone:number;
  treatment:string;
  Date?:Date;
}
