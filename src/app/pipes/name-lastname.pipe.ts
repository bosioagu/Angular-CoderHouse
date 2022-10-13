import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameLastname'
})
export class NameLastnamePipe implements PipeTransform {

  transform(value: string, args: string): unknown {
    let fulllName = value + " " + args.toUpperCase()
    return fulllName;
  }

}
