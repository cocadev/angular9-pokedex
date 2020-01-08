import { Pipe, PipeTransform } from '@angular/core';
import {DatePipe} from "@angular/common";

@Pipe({
  name: 'currentDatetime'
})
export class CurrentDatetimePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      return new DatePipe('en-US').transform(value, "MMM. d (HH:mm 'Hrs')");
    }
  }
}
