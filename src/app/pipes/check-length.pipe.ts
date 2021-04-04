import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkLength'
})
export class CheckLengthPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.length;
  }

}
