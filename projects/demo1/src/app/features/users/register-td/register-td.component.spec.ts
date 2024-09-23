import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTdComponent } from './register-td.component';

describe('RegisterTdComponent', () => {
  let component: RegisterTdComponent;
  let fixture: ComponentFixture<RegisterTdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterTdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterTdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
