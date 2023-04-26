import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss'],
})
export class MainpageComponent implements OnInit {
  wordText1: string[] = ['Munkahelyváltás előtt állsz?' , 'Érdekel az IT világa?' , 'PROGmasters?'];
  images = [
    {
      title: 'Új állás',
      secondTitle: 'A PROGmastersnél nem engedjük el a kezed a képzés után. 96% a szakmában elhelyezkedett tanulóink aránya.',
      url:"assets/images/new-job.jpg",
    },
    {
      title: 'Programozási nyelvek, -metódusok',
      secondTitle: 'Ha még sosem próbáltad... Ha már megy, de még nem tökéletesen... Bárhogy is legyen, bátran jelentkezz képzéseinkre!',
      url:"assets/images/languages.png",
    },
    {
      title: 'Soft-skillek',
      secondTitle: 'Képzéseinken nem csak programozni tanulhatsz meg. Oktatóink kiemelt figyelmet fordítanak a soft-skillekre, így sikeresebb lehetsz az állásinterjúkon!',
      url:"assets/images/softskills.jpg",
    },
    {
      title: 'Partnerkapcsolatok',
      secondTitle: 'A PROGmastersnél fontosnak tartjuk a partneri kapcsolatok kialakítását. Több, mint 80 céggel ápolunk jó viszonyt.',
      url:"assets/images/partners.jpg",
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
