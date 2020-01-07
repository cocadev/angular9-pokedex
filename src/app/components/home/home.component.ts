import { Component, OnInit } from '@angular/core';
import { IsoDateTimePipe } from 'src/app/pipe/iso-datetime.pipe';
import { ParseDatestringPipe } from 'src/app/pipe/parse-datestring.pipe';
import { RatingStarPipe } from 'src/app/pipe/rating-star.pipe';
import { ThousandFormatPipe } from 'src/app/pipe/thousand-format.pipe';
import { DaysOffsetPipe } from 'src/app/pipe/days-offset.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  iso_date_time: string;
  parse_date_time: string;
  ratings: any;
  price: string;
  offset_day: string;

  constructor() { 
  }

  ngOnInit() {
    this.iso_date_time = new IsoDateTimePipe().transform(new Date().toString());
    this.parse_date_time = new ParseDatestringPipe().transform('2019-12-30T10:00:00.000');
    this.ratings = new RatingStarPipe().transform(3);

    this.price = new ThousandFormatPipe().transform(1200000334, {isPrice: true});
    this.offset_day = new DaysOffsetPipe().transform('2020-01-07T10:00:00.000');

  }

}
