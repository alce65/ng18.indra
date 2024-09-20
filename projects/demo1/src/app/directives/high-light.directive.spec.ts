import { ElementRef } from '@angular/core';
import { HighLightDirective } from './high-light.directive';

describe('HighLigthDirective', () => {
  it('should create an instance', () => {
    const directive = new HighLightDirective(new ElementRef(new HTMLElement()));
    expect(directive).toBeTruthy();
  });
});
