import { NgModule } from "@angular/core";
import { AdminComponent } from "./admin.component";
import { RouterModule } from "@angular/router";
import { AdminSharedModule } from "./admin-shared/admin-shared.module";
import { AdminGuard } from "../auth/admin-guard";
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
    imports : [
        AdminSharedModule,
        AgGridModule,
        RouterModule.forChild([
            {
                path : '',
                redirectTo : 'dashboard',
                pathMatch : 'full'
            },
            {
                path : '',
                component : AdminComponent,
                canActivate: [AdminGuard],
                children : [
                    {
                        path : 'dashboard',
                        canActivate: [AdminGuard],
                        loadChildren : () => import('./dashboard/dashboard.module')
                        .then(mod => mod.DashboardModule)
                    },
                    {
                        path : 'users',
                        canActivate: [AdminGuard],
                        loadChildren : () => import('./users/users.module')
                        .then(mod => mod.UsersModule)
                    },
                    {
                        path : 'products',
                        canActivate: [AdminGuard],
                        loadChildren : () => import('./products/products.module')
                        .then(mod => mod.ProductsModule)
                    },
                    {
                        path : 'orders',
                        canActivate: [AdminGuard],
                        loadChildren : () => import('./orders/orders.module')
                        .then(mod => mod.OrdersModule)
                    }
                ]
            }
        ])
    ],
    declarations : [
        AdminComponent,
        
    ],
})

export class AdminModule{

}