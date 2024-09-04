import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'any',
  standalone: true
})
export class AnyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
    
  }

}
