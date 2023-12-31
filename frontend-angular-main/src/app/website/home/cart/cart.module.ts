import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { RouterModule } from '@angular/router';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild([
      {
        path : '',
        component : CartComponent
      }
    ])
  ]
})
export class CartModule { }
