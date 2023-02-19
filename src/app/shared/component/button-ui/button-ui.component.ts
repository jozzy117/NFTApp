import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-ui',
  templateUrl: './button-ui.component.html',
  styleUrls: ['./button-ui.component.css']
})
export class ButtonUiComponent implements OnInit {

  @Input() name: string = '';
  @Input() otherClass: string = '';
  @Input() classNames: string = '';
  @Input() isProduct: boolean = false;
  @Input() onlyTime: boolean = false;
  @Input() isRound: boolean = true;
  @Input() hasIcon: boolean = true;
  @Input() rightAlign: boolean = false;
  @Input() price:number = 0.00;
  @Input() time:string = '00 : 00 : 00';

  constructor() { }

  ngOnInit(): void {
  }

}
