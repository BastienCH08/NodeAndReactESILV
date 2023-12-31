import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(public api : ApiService,
              private router : Router) {

  }
  logOut() {
    this.api.logOut()
    this.router.navigate(['/login'])
  }
}
