import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{
  ngOnInit(): void {
    this.fetchUserData();
  }
  baseUrl : any
  data : any
  userId : any
  constructor(private api : ApiService,
              private http : HttpClient) {
            this.baseUrl = this.api.baseUrl
            this.userId = this.api.user.userId
  }
  fetchUserData() {
    const param = {
      user_id : this.userId
    }
    this.http.post(`${this.baseUrl}/orders/user/list`,param).subscribe((resp: any) => {
      if (resp.success) {
        this.data = resp.data;
        this.rowData = this.data;
      }
    });
  }

  gridOptions = {
    pagination: false
  };

 
  columnDefs: ColDef[] = [
    { headerName: 'Order Id', field: 'id', flex: 1 },
    { headerName: 'Price', field: 'totalAmount', flex: 1 },
    { headerName: 'Items', field: 'items', flex: 1 },
    
  ];

  rowData: any[] = [];

}
