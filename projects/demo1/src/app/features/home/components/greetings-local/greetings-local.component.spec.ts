import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingsLocalComponent } from './greetings-local.component';

describe('GreetingsLocalComponent', () => {
  let component: GreetingsLocalComponent;
  let fixture: ComponentFixture<GreetingsLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreetingsLocalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreetingsLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
