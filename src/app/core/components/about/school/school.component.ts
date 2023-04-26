import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent implements OnInit {


  public imgURLS: string[] = [
    '../assets/images/gallery/headquerter.png',
    '../assets/images/gallery/tanterem2.png',
    '../assets/images/gallery/tanterem3.png',
    '../assets/images/gallery/tanterem4.png',
    '../assets/images/gallery/tanterem5.png',
    '../assets/images/gallery/tanterem6.png',
    '../assets/images/gallery/tanterem7.png'
  ];

  public picture: string = this.imgURLS[0];


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public goForward() {
    let i = this.imgURLS.indexOf(this.picture);
    if (i === this.imgURLS.length - 1) {
      this.picture = this.imgURLS[0]
    } else {
      this.picture = this.imgURLS[i + 1]
    }
  }

  public goBackward() {
    let i = this.imgURLS.indexOf(this.picture);
    if (i === 0) {
      this.picture = this.imgURLS[this.imgURLS.length - 1]
    } else {
      this.picture = this.imgURLS[i - 1]
    }
  }




  goToEnroll() {
    this.router.navigate(["jelentkezes"])
  }

}
