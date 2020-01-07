import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thousandFormat'
})
export class ThousandFormatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value != null) {
      if (args.isPrice) {
        value = value / 100
      }

      const str_array = value.toString().split('.');
      const decimal = str_array[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

      let point = '';
      if (args.isPrice) {
        if (str_array[1]) {
          // if (str_array[1].length == 1) {
          //   point = '.' + str_array[1] + '0';
          // } else {
            point = '.' + str_array[1];
          // }
        } else {
          // point = '.00';
        }
      }

      return decimal + point;
    } else {
      return '0';
      // return '0.00';
    }
  }

}
