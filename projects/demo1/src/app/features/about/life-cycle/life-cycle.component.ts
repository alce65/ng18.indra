import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  AfterViewInit,
  AfterContentInit,
  ViewChild,
  // ContentChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'ind-life-cycle',
  standalone: true,
  imports: [],
  template: ` <p>life-cycle works!</p>
    <input type="text" placeholder="1" />
    <input #p1 type="text" placeholder="2" />`,
  styles: ``,
})
export class LifeCycleComponent
  implements OnInit, OnChanges, AfterViewInit, AfterContentInit, OnDestroy
{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleInterval: any;

  @ViewChild('p1') refP1!: ElementRef;
  @ViewChild(LifeCycleComponent) refPComponent: LifeCycleComponent | undefined;
  // @ContentChild() ref2!: any;

  constructor() {
    console.log('Constructor');
    console.log('P1', this.refP1);
    this.handleInterval = setInterval(() => {
      console.log('Interval');
    }, 1000);
  }

  ngOnInit(): void {
    // Called after the constructor,
    //  initializing input properties,
    // and the first call to ngOnChanges.
    console.log('On Init');
    console.log('P1', this.refP1);
  }

  ngOnChanges(): void {
    console.log('On Changes');
  }

  ngAfterContentInit(): void {
    console.log('After Content Init');
  }

  ngAfterViewInit() {
    console.log('After View Init');
    console.log('P1', this.refP1);
    this.refP1.nativeElement.focus();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    console.log('On Destroy');
    clearInterval(this.handleInterval);
  }
}
