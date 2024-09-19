import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteAddComponent } from './note-add.component';

describe('NoteAddComponent', () => {
  let component: NoteAddComponent;
  let fixture: ComponentFixture<NoteAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
