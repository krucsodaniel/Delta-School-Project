import { Injectable } from '@angular/core';
import { HeaderData } from '../model/headerdata';

@Injectable({
  providedIn: 'root'
})
export class HeaderdataService {


  headerData: HeaderData[]  = [
    {
      name: 'Főoldal',
      routerLink: ''
    },
    {
      name: 'Képzéseink',
      routerLink: 'kepzeseink'
    },
    {
      name: 'Rólunk',
      routerLink: 'rolunk'
    },
    {
      name: 'Jelentkezés',
      routerLink: 'jelentkezes'
    },
  ]
  
  constructor() { }
}
