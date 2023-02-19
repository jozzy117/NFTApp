import { Component, OnInit } from '@angular/core';
import { fadeIn, fadeIn_1, fadeIn_2 } from 'src/app/shared/animation/app.animation';
import { Product } from 'src/app/shared/models/interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  animations: [fadeIn,fadeIn_1, fadeIn_2]
})
export class ProductComponent implements OnInit {

  product:any;
  name:string = 'brosJ';
  actionTitle:string = 'place a bid';

  constructor() { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    if(history.state.navigationId === 1) {
      this.product = JSON.parse(localStorage.getItem('product') || '{}');
    }else {
      this.product = history.state;
      localStorage.setItem('product', JSON.stringify(history.state));
    }
  }

}
