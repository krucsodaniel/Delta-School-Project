import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {

  @Input() options: {id: string, value: string, label: string}[] =[];
  @Input() name: string = '';
  @Input() controllerName!: string;
  @Input() form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
