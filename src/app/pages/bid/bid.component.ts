import { Component, OnInit } from '@angular/core';
import { fadeIn, fadeIn_1 } from 'src/app/shared/animation/app.animation';
import { ChartService } from 'src/app/shared/services/chart.service';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.css'],
  animations: [fadeIn,fadeIn_1]
})
export class BidComponent implements OnInit {

  element:any;
  productTime = [
    { value: '15min'},
    { value: '1hr'},
    { value: '1d'},
    { value: '1wk'}
  ]
  productConfig = { "slidesToShow": 3, "slidesToScroll": 1, "autoplay": false, "dots": false, "showArrow" : false, "autoplaySpeed" : 3000, };
  chartOptions:any = {}
  constructor(
    private chartService: ChartService
  ) {}

  ngOnInit(): void {
    this.getProduct();
    this.getChart();
  }

  getChart() {
    this.chartOptions = this.chartService.getChart();
  }

  getProduct() {
    if(history.state.navigationId === 1) {
      this.element = JSON.parse(localStorage.getItem('element') || '{}');
    }else {
      this.element = history.state;
      localStorage.setItem('element', JSON.stringify(history.state));
    }
  }

}
