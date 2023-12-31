import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit{
  chartGraph = false 
  @ViewChild("chart") chart: ChartComponent | any;
  public chartOptions: Partial<ChartOptions> | any;
  baseUrl : any
  data : any
  constructor(private api : ApiService,
              private http : HttpClient) {
                this.chartGraph = false
      this.api.active = 'dashboard'
      this.baseUrl = this.api.baseUrl
      this.http.get(`${this.baseUrl}/dashboard`).subscribe((resp : any) => {
        if(resp.success) {
          this.data = resp.data

          this.chartOptions = {
            series: [this.data.users,this.data.products,this.data.orders],
            chart: {
              type: "donut"
            },
            labels: ['Users', 'Products', 'Orders'],
            responsive: [
              {
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: "bottom"
                  }
                }
              }
            ]
          };
          this.chartGraph = true
        
        
        }
      } )
  }
  ngOnInit(): void {
    this.api.active = 'dashboard'
  }
  
}
