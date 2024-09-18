import { provideRouter } from '@angular/router';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  // Ejemplo de test de caja blanca
  // o test de la implementación
  it(`should have the 'demo1' title`, () => {
    expect(component.title).toContain('Angular');
  });

  // Ejemplo de test de caja negra
  // o test de la funcionalidad
  // Es agnóstico a la implementación
  it('should render title', () => {
    const debugComponent = fixture.debugElement;
    const debugElementP = debugComponent.query(By.css('p'));
    const elementP = debugElementP.nativeElement as HTMLParagraphElement;

    // Opción alternativa
    // const componentElement = fixture.nativeElement as HTMLElement;
    // const elementP = componentElement.querySelector('p');

    expect(elementP.textContent).toContain('contenido');
  });
});
