import { Component, OnInit } from '@angular/core';
import { ServiceData } from '../service-data/service-data';

@Component({
  selector: 'app-ngx-charts-heat-map',
  templateUrl: './ngx-charts-heat-map.component.html',
  styleUrls: ['./ngx-charts-heat-map.component.scss']
})
export class NgxChartsHeatMapComponent implements OnInit {

  multi = [
    {
      "name": "NoData",
      "series": [
        {
          "name": "NoData",
          "value": 0
        }
      ]
    }
  ];
  view: any[] = [700, 300];
  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Months';
  yAxisLabel: string = 'Days';
  colorScheme = {
    domain: ['#4236c9','#4d9ce5', '#34b8f9', '#23c175', '#e5c84d', '#f98d34', '#f95c34', '#f93434']
  };

  constructor(private serviceData : ServiceData) {
    Object.assign(this.multi);
  }

  ngOnInit() {
    this.serviceData.getAverageData()
      .then(response => this.multi = response)
      .catch(error => console.log(error));
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }



}
