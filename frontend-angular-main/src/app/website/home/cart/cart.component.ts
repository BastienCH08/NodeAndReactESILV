import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent{
  baseUrl : any = ''
  userId : any = 0
  products : any = []
  t_a : any = 0
    constructor(private http : HttpClient,
                public api : ApiService) {
            this.baseUrl = this.api.baseUrl
            this.userId = this.api.user.userId
            const param = {
              user_id : this.userId
            }
            this.http.post(`${this.baseUrl}/cart/list`, param).subscribe((resp : any) =>{
                if(resp.data.length > 0){
                  this.products = resp.data
                  this.t_a = resp.totalAmount
                }
            
            })
    }
    deleteCart(i : any,d : any) {
        const param = {
            user_id : this.userId,
            product_id : d
        }
        this.http.post(`${this.baseUrl}/cart/delete`, param).subscribe((resp : any) =>{
            this.t_a -= this.products[i].price
            this.products.splice(i,1)
        })

    }
    order(){
        const productsIds: any = []
        this.products.forEach((e : any) => {
              productsIds.push(e.id)
        });
        const param = {
            user_id : this.userId,
            products : productsIds,
            totalAmount : this.t_a
        }
        console.log(param)
        this.http.post(`${this.baseUrl}/orders/add`, param).subscribe((resp : any) =>{
              if(resp.success) {
                  alert("Order Place Successfully")
                  this.products = []
              }
        })
    }

}
