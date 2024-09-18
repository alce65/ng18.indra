import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit countChange event', () => {
    spyOn(component.countChange, 'emit');
    component.onChange(1);
    expect(component.countChange.emit).toHaveBeenCalledWith(1);
    expect(component.value).toBe(1);
  });

  it('should decrement value', () => {
    spyOn(component.countChange, 'emit');
    component.value = 0;
    const buttons = fixture.nativeElement.querySelectorAll(
      'button',
    ) as HTMLButtonElement[];
    const ps = fixture.nativeElement.querySelectorAll(
      'p',
    ) as HTMLParagraphElement[];
    expect(ps[1].textContent).toBe('0');
    buttons[0].click();
    fixture.detectChanges();
    expect(component.countChange.emit).toHaveBeenCalledWith(-1);
    expect(ps[1].textContent).toBe('-1');
  });

  it('should increment value', () => {
    spyOn(component.countChange, 'emit');
    component.value = 0;
    const buttons = fixture.nativeElement.querySelectorAll(
      'button',
    ) as HTMLButtonElement[];
    const ps = fixture.nativeElement.querySelectorAll(
      'p',
    ) as HTMLParagraphElement[];
    expect(ps[1].textContent).toBe('0');
    buttons[1].click();
    fixture.detectChanges();
    expect(component.countChange.emit).toHaveBeenCalledWith(1);
    expect(ps[1].textContent).toBe('1');
  });
});
