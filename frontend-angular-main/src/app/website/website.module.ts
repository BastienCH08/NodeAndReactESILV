import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteComponent } from './website.component';
import { LayoutModule } from './home/layout/layout.module';
import { RouterModule } from '@angular/router';
import { UserGuard } from '../auth/user-guard';



@NgModule({
  declarations: [
    WebsiteComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule.forChild([
      {
        path : '',
        component : WebsiteComponent,
        canActivate: [UserGuard],
        children : [
          {
            path : '',
            loadChildren : () => import('./home/home.module')
            .then(mod => mod.HomeModule)
          },
          {
            path : 'cart',
            canActivate: [UserGuard],
            loadChildren : () => import('./home/cart/cart.module')
            .then(mod => mod.CartModule)
          },
          {
            path : 'orders',
            canActivate: [UserGuard],
            loadChildren : () => import('./orders/orders.module')
            .then(mod => mod.OrdersModule)
          },
          {
            path : 'docs',
            canActivate: [UserGuard],
            loadChildren : () => import('./docs/docs.module')
            .then(mod => mod.DocsModule)
          }
        ]
      },
      
    ])
  ]
})
export class WebsiteModule { }
