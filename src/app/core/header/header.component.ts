import { Component, OnInit } from '@angular/core';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import { HeaderData } from 'src/app/model/headerdata';
import { HeaderdataService } from 'src/app/services/headerdata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faAlignJustify = faAlignJustify;
  openMobilSlidebar: boolean = false;
  headerData!: HeaderData[];

  constructor(private headerService: HeaderdataService) {}

  ngOnInit(): void {
    this.headerData = this.headerService.headerData;
  }

  openMobilNavbar(): void {
    this.openMobilSlidebar = !this.openMobilSlidebar;
  }
}
