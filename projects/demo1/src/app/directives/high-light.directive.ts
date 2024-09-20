import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[indHighLight]',
  standalone: true,
})
export class HighLightDirective implements OnInit {
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input({ alias: 'indHighLight' }) color: string | undefined;
  private element = inject(ElementRef);

  ngOnInit(): void {
    console.log('HighLightDirective created', this.element);
    console.log('Color:', this.color);
    this.element.nativeElement.style.backgroundColor = this.color ?? 'yellow';
  }
}

@Directive({
  selector: '[indHighLightAlt]',
  standalone: true,
})
export class HighLightAltDirective implements OnInit {
  @Input() indHighLightAlt: string | undefined;

  @HostBinding('style.backgroundColor')
  color: string | undefined;

  ngOnInit(): void {
    this.color = this.indHighLightAlt ?? 'yellow';
  }

  @HostListener('click') onClick(): void {
    console.log('Element clicked');
  }
}
