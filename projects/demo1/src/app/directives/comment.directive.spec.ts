import { ElementRef } from '@angular/core';
import { CommentDirective } from './comment.directive';

describe('CommentDirective', () => {
  it('should create an instance', () => {
    const directive = new CommentDirective(new ElementRef(new HTMLElement()));
    expect(directive).toBeTruthy();
  });
});
