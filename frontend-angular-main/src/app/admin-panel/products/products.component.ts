import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef, GridApi } from 'ag-grid-community';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  baseUrl: any;
  data: any = [];
  private gridApi: GridApi | undefined;

  constructor(private api: ApiService, private http: HttpClient) {
    this.api.active = 'products';
    this.baseUrl = api.baseUrl;
  }

  ngOnInit(): void {
    this.fetchUserData();
  }

  fetchUserData() {
    this.http.get(`${this.baseUrl}/products`).subscribe((resp: any) => {
      if (resp.success) {
        this.data = resp.data;
        this.rowData = this.data;
      }
    });
  }

  gridOptions = {
    pagination: false
  };

  deleteButtonRenderer(params: any) {
    const button = document.createElement('button');
    button.innerHTML = 'Delete';
    button.classList.add('btn', 'btn-danger');
    button.addEventListener('click', () => this.deleteUser(params));
    return button;
  }

  columnDefs: ColDef[] = [
    { headerName: 'Title', field: 'name', flex: 1 },
    { headerName: 'Price', field: 'price', flex: 1 },
    { headerName: 'Description', field: 'description', flex: 1 },
    {
      headerName: 'Delete',
      cellRenderer: this.deleteButtonRenderer.bind(this),
      flex: 1
    }
  ];

  rowData: any[] = [];

  onGridReady(params: any) {
    this.gridApi = params.api;
  }

  deleteUser(params: any) {
    const selectedRow = params.data;
    const selectedIndex = this.rowData.findIndex((row) => row.userId === selectedRow.userId);

    if (selectedIndex > -1) {
      const userIdToDelete = selectedRow.id;
      const params = {
        product_id : userIdToDelete
      }
      // Assuming you have an endpoint for deleting a user by ID
      this.http.post(`${this.baseUrl}/products/delete`,params).subscribe((resp: any) => {
        if (resp.success) {
          this.rowData.splice(selectedIndex, 1);
          this.gridApi?.setRowData(this.rowData);
        } else {
          // Handle error cases from backend
          console.error('Error deleting user');
        }
      });
    }
  }
}
