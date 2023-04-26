import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-flash-text',
  templateUrl: './flash-text.component.html',
  styleUrls: ['./flash-text.component.scss']
})
export class FlashTextComponent implements AfterViewInit {

  @Input() word = 'text';
  @Input() textColor = "black";
  @Input() fontSize = "20px";
  @ViewChild("textElement") textElement!: ElementRef;
  
  constructor(
    private renderer: Renderer2
  ) { }

  ngAfterViewInit(): void {
    this.initVariables();
  }

  private initVariables(): void {
    this.renderer.setStyle(
      this.textElement.nativeElement,
      "color",
      this.textColor
    );
    this.renderer.setStyle(
      this.textElement.nativeElement,
      "font-size",
      this.fontSize
    );
    this.renderer.setStyle(this.textElement.nativeElement, "padding", "0.1em");
  }

}
