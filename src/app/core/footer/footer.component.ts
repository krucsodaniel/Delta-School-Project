import { Component, OnInit } from '@angular/core';
import { FooterData } from 'src/app/model/footerdata';
import { FooterdataService } from 'src/app/services/footerdata.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  footerData!: FooterData[];
  year: number = new Date().getFullYear();

  constructor(private footerService: FooterdataService) {}

  ngOnInit(): void {
    this.footerData = this.footerService.footerData;
  }

  openTheUrl(url: string): void {
    window.open(url);
  }
}
