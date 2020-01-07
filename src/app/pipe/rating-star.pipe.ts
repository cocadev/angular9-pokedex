import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratingStar'
})
export class RatingStarPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let html = '', count = Math.floor(value / 2), count_ = 5 - count;
    for (let i = 0; i < count; i++) {
      html += '<i class="fa fa-star" aria-hidden="true"></i>';
    }
    if (value % 2 === 1) {
      html += '<i class="fa fa-star-half-o" aria-hidden="true"></i>';
      count_ -= 1;
    }
    for (let i = 0; i < count_; i++) {
      html += '<i class="fa fa-star-o" aria-hidden="true"></i>';
    }
    return html;
  }

}
