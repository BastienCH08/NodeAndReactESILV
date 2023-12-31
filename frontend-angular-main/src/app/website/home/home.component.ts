import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  baseUrl = ''
  userId = -1
  productsList : any = []
    constructor( public api:ApiService,
                  private http: HttpClient) {
                    
            this.baseUrl = this.api.baseUrl
            this.userId = this.api.user.userId
            this.http.get(`${this.baseUrl}/products`).subscribe((resp : any) =>{
                if(resp.success) {
                    this.productsList = resp.data
                }
            })
    }
    ngOnInit(): void {
        this.baseUrl = this.api.baseUrl
        this.userId = this.api.user.userId
    }
    addToCart(id : any) {
        const param = {
            product_id : id,
            user_id : this.userId,
        }
        console.log(param)
        this.http.post(`${this.baseUrl}/cart/add`,param).subscribe((resp : any) =>{
          alert('Product Added')
      })
    }

}
