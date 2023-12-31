import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';



@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [
    CommonModule,
    AgGridModule,
    RouterModule.forChild([
      {
        path : '',
        component : OrdersComponent
      }
    ])
  ]
})
export class OrdersModule { }
