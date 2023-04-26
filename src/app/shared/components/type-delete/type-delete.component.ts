import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-type-delete',
  templateUrl: './type-delete.component.html',
  styleUrls: ['./type-delete.component.scss']
})
export class TypeDeleteComponent {

  @ViewChild("textElement") textElement!: ElementRef;
  @ViewChild("blinkElement") blinkElement!: ElementRef;

  @Input() wordArray: string[] = [
    "You Can...",
    "Write Anything You want...",
    "SBZ 🍻 Enjoy 🍸🍻🍺🍷🍹"
  ];
  @Input() textColor = "black";
  @Input() fontSize = "20px";
  @Input() blinkWidth = "2px";
  @Input() typingSpeedMilliseconds = 300;
  @Input() deleteSpeedMilliseconds = 300;

  private i = 0;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.initVariables();
    this.typingEffect();
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

    this.renderer.setStyle(
      this.blinkElement.nativeElement,
      "border-right-width",
      this.blinkWidth
    );
    this.renderer.setStyle(
      this.blinkElement.nativeElement,
      "border-right-color",
      this.textColor
    );
    this.renderer.setStyle(
      this.blinkElement.nativeElement,
      "font-size",
      this.fontSize
    );
  }

  private typingEffect(): void {
    const word = this.wordArray[this.i].split("");
    const loopTyping = () => {
      if (word.length > 0) {
        this.textElement.nativeElement.innerHTML += word.shift();
      } else {
        this.deletingEffect();
        return;
      }
      setTimeout(loopTyping, this.typingSpeedMilliseconds);
    };
    loopTyping();
  }

  private deletingEffect(): void {
    const word = this.wordArray[this.i].split("");
    const loopDeleting = () => {
      if (word.length > 0) {
        word.pop();
        this.textElement.nativeElement.innerHTML = word.join("");
      } else {
        if (this.wordArray.length > this.i + 1) {
          this.i++;
        } else {
          this.i = 0;
        }
        this.typingEffect();
        return false;
      }
      setTimeout(loopDeleting, this.deleteSpeedMilliseconds);
    };
    loopDeleting();
  }
}