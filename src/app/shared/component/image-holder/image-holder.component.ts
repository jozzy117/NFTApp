import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-holder',
  templateUrl: './image-holder.component.html',
  styleUrls: ['./image-holder.component.css']
})
export class ImageHolderComponent implements OnInit {

  @Input() imgSrc:string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
