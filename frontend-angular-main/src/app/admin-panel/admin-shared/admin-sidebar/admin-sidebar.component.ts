import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "src/app/services/api.service";

@Component({
    selector : 'app-admin-sidebar',
    templateUrl : './admin-sidebar.component.html',
    styleUrls : ['./admin-sidebar.component.scss']
})

export class AdminSideBarComponent{
    @Input() shortSideBar : any
    constructor(public api : ApiService,
                private router : Router) {

    }
    logOut() {
        this.api.logOut()
        this.router.navigate(['/login'])
    }
}