import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MentorModel } from 'src/app/model/mentor.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

 
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
