import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
isCollapsed: any = true
  constructor(public api : ApiService,
              private router : Router) {
  }

  logOut() {
      this.api.logOut()
      this.router.navigate(['/login'])
  }
}
