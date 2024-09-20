import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[indComment]',
  standalone: true,
})
export class CommentDirective implements OnInit {
  @Input() indComment!: string;
  constructor(private element: ElementRef) {
    console.log(element);
  }

  ngOnInit(): void {
    this.element.nativeElement.setAttribute('title', this.indComment);
  }

  @HostListener('click') cambiar(): void {
    this.element.nativeElement.setAttribute('title', 'Directiva anulada');
  }
}
