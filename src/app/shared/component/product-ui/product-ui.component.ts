import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-ui',
  templateUrl: './product-ui.component.html',
  styleUrls: ['./product-ui.component.css']
})
export class ProductUiComponent implements OnInit {

  @Input() imgSrc:string = '';
  @Input() price:number = 0.00;
  @Input() time:string = '00 : 00 : 00';
  classNames:string = 'fa-brands fa-ethereum';
  constructor() { }

  ngOnInit(): void {
  }

}
