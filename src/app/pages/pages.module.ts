import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BidComponent } from './bid/bid.component';
import { ProductComponent } from './product/product.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgApexchartsModule } from 'ng-apexcharts';

export const routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, pathMatch: 'full'},
  {path: 'bid', component: BidComponent, pathMatch: 'full', data: {animation: 'isRight'}},
  {path: 'product', component: ProductComponent, pathMatch: 'full'},
]

@NgModule({
  declarations: [
    HomeComponent,
    BidComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    SlickCarouselModule,
    NgApexchartsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class PagesModule { }
