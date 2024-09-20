import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true,
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, length: number): string {
    if (length > 0) {
      if (length < value.length) {
        return value.slice(0, length - 3) + '...';
      }
    }
    return value;
  }
}
