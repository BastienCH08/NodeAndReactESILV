import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoAuthGuard } from './auth/no-auth-guard';
import { UserGuard } from './auth/user-guard';
import { AdminGuard } from './auth/admin-guard';


const routes: Routes = [
    {
        path : '',
        redirectTo : 'login',
        pathMatch : 'full'
    },
    {
      path : 'login',
      canActivate: [NoAuthGuard],
      loadChildren : () => import('./login/login.module')
      .then(mod => mod.LoginModule)
    },
    {
      path : 'home',
      canActivate: [UserGuard],
      loadChildren : () => import('./website/website.module')
      .then(mod => mod.WebsiteModule)
    },
    {
      path : 'admin',
      canActivate: [AdminGuard],
      loadChildren : () => import('./admin-panel/admin.module')
      .then(mod => mod.AdminModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
