import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocsComponent } from './docs.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DocsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path : '',
      component : DocsComponent,
      
    }])
  ]
})
export class DocsModule { }
