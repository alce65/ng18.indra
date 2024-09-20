import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterRxComponent } from './register-rx.component';

describe('RegisterRxComponent', () => {
  let component: RegisterRxComponent;
  let fixture: ComponentFixture<RegisterRxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterRxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
