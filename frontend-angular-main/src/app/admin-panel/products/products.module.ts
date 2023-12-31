import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';



@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    AgGridModule,
    RouterModule.forChild([
      {
        path : '',
        component : ProductsComponent
      }
    ])
  ]
})
export class ProductsModule { }
