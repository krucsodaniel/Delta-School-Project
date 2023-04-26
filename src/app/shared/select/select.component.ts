import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() options: {key: string, displayValue: string}[] =[];
  @Input() content: string = '';
  @Input() label: string = '';
  @Input() controllerName!: string;
  @Input() form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
