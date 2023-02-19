import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonUiComponent } from './component/button-ui/button-ui.component';
import { ProductUiComponent } from './component/product-ui/product-ui.component';
import { ImageHolderComponent } from './component/image-holder/image-holder.component';



@NgModule({
  declarations: [
    ButtonUiComponent,
    ProductUiComponent,
    ImageHolderComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ButtonUiComponent,
    ProductUiComponent,
    ImageHolderComponent
  ]
})
export class SharedModule { }
