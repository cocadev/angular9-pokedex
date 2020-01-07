import {Pipe, PipeTransform} from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'daysOffset'
})
export class DaysOffsetPipe implements PipeTransform {

  transform(val: any): any {
    if (val) {
      let d = new Date(val), days, hours, minutes, str, _d = new Date();

    let jan = new Date(_d.getFullYear(), 0, 1);
    let jul = new Date(_d.getFullYear(), 6, 1);
    let gmtHours = -Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset()) * 60;

      let diff = Math.floor((Date.now() - d.getTime()) / 1000) - gmtHours;
      diff = Math.abs(diff);
      days = Math.floor(diff / 3600 / 24);

      if (days < 1) {
        str = '';
        diff = diff - days * 3600 * 24;
        hours = Math.floor(diff / 3600);
        if (hours === 1) {
          str += '1 hour ';
        } else if (hours > 1) {
          str += hours + ' hours ';
        }
        minutes = Math.floor((diff - hours * 3600) / 60);
        if (minutes <= 1) {
          str += '1 minute';
        } else {
          str += minutes + ' minutes';
        }
        return str + ' ago';
      } else {
        const utcTime = new Date(val);
        const localTime = new Date(utcTime.getTime() - (utcTime.getTimezoneOffset() * 60000));
        return new DatePipe('en-US').transform(localTime, 'medium');
      }
    } else {
      return '';
    }
  }

}
