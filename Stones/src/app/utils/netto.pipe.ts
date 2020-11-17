import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'netto'
})
export class NettoPipe implements PipeTransform {

  public transform(price: number, tax: number = 16, type: string = 'netto'): number {
    if (type === 'brutto') {
      return price * (1 + tax / 100);
    } else {
      return price / (1 + tax / 100);
    }
  }

}
