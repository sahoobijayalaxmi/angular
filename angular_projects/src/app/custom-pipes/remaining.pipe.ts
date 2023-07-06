import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining'
})
export class RemainingPipe implements PipeTransform {

  transform(input:string ,maxchar?:any) :number{
    maxchar=maxchar || 100;
    return maxchar -input.length;
    // return 100-input.length;

  }

}
