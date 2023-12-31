import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef, GridApi } from 'ag-grid-community';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  baseUrl: any;
  data: any = [];
  private gridApi: GridApi | undefined;

  constructor(private api: ApiService, private http: HttpClient) {
    this.api.active = 'users';
    this.baseUrl = api.baseUrl;
  }

  ngOnInit(): void {
    this.fetchUserData();
  }

  fetchUserData() {
    this.http.get(`${this.baseUrl}/user`).subscribe((resp: any) => {
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
    { headerName: 'Name', field: 'name', flex: 1 },
    { headerName: 'Email', field: 'email', flex: 1 },
    { headerName: 'Address', field: 'address', flex: 1 },
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
      const userIdToDelete = selectedRow.userId;
      const params = {
        user_id : userIdToDelete
      }
      // Assuming you have an endpoint for deleting a user by ID
      this.http.post(`${this.baseUrl}/user/delete`,params).subscribe((resp: any) => {
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
