import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    NgApexchartsModule,
    
    RouterModule.forChild([
      {
        path : '',
        component : DashboardComponent
      }
    ])
  ]
})
export class DashboardModule { }
