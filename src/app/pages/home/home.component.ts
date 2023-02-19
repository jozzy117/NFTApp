import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { slideUp } from 'src/app/shared/animation/app.animation';
import { ElementProd, Product } from 'src/app/shared/models/interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [slideUp]
})
export class HomeComponent implements OnInit {
  productList = [
    { id: 1, imgSrc:'assets/images/cyburg.PNG', price: 0.40, time: '07 : 24 : 35' },
    { id: 2, imgSrc:'assets/images/hog.PNG', price: 0.82, time: '13 : 00 : 15' },
    { id: 3, imgSrc:'assets/images/smoother.PNG', price: 1.24, time: '10 : 30 : 00'},
  ];
  products = [
    { name:'etherum', className: 'fa-brands fa-ethereum', amount: 1579.88 },
    { name:'bitcoin', className: 'fa-brands fa-bitcoin', amount: 1000.00 },
    { name:'litecoin', className: 'fa-brands fa-litecoin-sign', amount: 200.88 },
  ];
  products2 = [
    { name:'xrp', className: 'fa-brands fa-litecoin-sign', amount: 398.28 },
    { name:'dodge', className: 'fa-brands fa-litecoin-sign', amount: 145.84 },
    { name:'cosmos', className: 'fa-brands fa-litecoin-sign', amount: 300.88 },
    { name:'chainlink', className: 'fa-brands fa-litecoin-sign', amount: 579.88 },
    { name:'polygon', className: 'fa-brands fa-litecoin-sign', amount: 709.23 },
    { name:'uniswap', className: 'fa-brands fa-litecoin-sign', amount: 1279.67 },
  ];
  productConfig = { "slidesToShow": 2, "slidesToScroll": 1, "autoplay": true, "dots": false, "showArrow" : false, "autoplaySpeed" : 2000, };
  productConfig2 = { "slidesToShow": 2.2, "slidesToScroll": 1, "autoplay": true, "dots": false, "showArrow" : false, "autoplaySpeed" : 5000, };
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  singleProd(val: Product) {
    this.router.navigateByUrl('/product', { state: val });
  }
  singleElem(val: ElementProd) {
    this.router.navigateByUrl('/bid', { state: val });
  }

}
