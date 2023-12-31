import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminSideBarComponent } from "./admin-sidebar/admin-sidebar.component";
import { RouterModule } from "@angular/router";

@NgModule(
    {
        imports : [
            CommonModule,
            RouterModule
            
        ],
        declarations : [
            AdminSideBarComponent
        ],
        exports : [
            AdminSideBarComponent,
            CommonModule,
           
        ]
    }

)
export class AdminSharedModule{

}