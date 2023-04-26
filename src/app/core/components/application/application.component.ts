import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {
  message: string[] = ['Csatlakozz hozzánk!', 'Jelentkezz képzéseinkre!']

  constructor() { }

  ngOnInit(): void {
  }

}
