import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SampleService {
  #value: number;
  constructor() {
    this.#value = Math.random();
  }

  getValue(): number {
    return this.#value;
  }
}
