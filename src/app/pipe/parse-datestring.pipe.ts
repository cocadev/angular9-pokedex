import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parseDatestring'
})
export class ParseDatestringPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      let date1 = value.split('T')[0];
      let date2 = value.split('T')[1].split('.')[0];

      let year = parseInt(date1.split('-')[0]);
      let month = parseInt(date1.split('-')[1]) - 1;
      let day = parseInt(date1.split('-')[2]);
      let hour = parseInt(date2.split(':')[0]);
      let min = parseInt(date2.split(':')[1]);
      let sec = parseInt(date2.split(':')[2]);

      let date = new Date(year, month, day, hour, min, sec, 0);
      return date;
    }
  }

}
