import { Injectable } from '@angular/core';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FooterData } from '../model/footerdata';

@Injectable({
  providedIn: 'root'
})
export class FooterdataService {


  footerData: FooterData[]  = [
    {
      icon: faFacebook,
      URL: 'https://www.facebook.com/progmasters.hu/',
    },
    {
      icon: faInstagram,
      URL: 'https://www.instagram.com/progmasters/',
    },
    {
      icon: faLinkedin,
      URL: 'https://hu.linkedin.com/school/progmasters/',
    },
  ]
  
  constructor() { }
}
