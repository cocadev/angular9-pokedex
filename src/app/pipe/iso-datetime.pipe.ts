import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isoDatetime'
})

export class IsoDateTimePipe implements PipeTransform {

  months = {
    'Jan': '01',
    'Feb': '02',
    'Mar': '03',
    'Apr': '04',
    'May': '05',
    'Jun': '06',
    'Jul': '07',
    'Aug': '08',
    'Sep': '09',
    'Oct': '10',
    'Nov': '11',
    'Dec': '12',
  };

  transform(value: any, args?: any): any {
    if (value) {
      const ar = value.split(' ');
      const str = ar[3] + '-' + this.months[ar[1]] + '-' + ar[2] + 'T' + ar[4] + '.000';
      return str;
    } else {
      return '0000-00-00T00:00:00.000';
    }
  }

}
