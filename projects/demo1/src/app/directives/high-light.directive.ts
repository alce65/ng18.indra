import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[indHighLight]',
  standalone: true,
})
export class HighLightDirective {
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input({ alias: 'indHighLight', required: true }) color!: string;
  constructor(private element: ElementRef) {
    console.log('HighLightDirective created', this.element);
    this.element.nativeElement.style.backgroundColor = this.color;
  }
}
