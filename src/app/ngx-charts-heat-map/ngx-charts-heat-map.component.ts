import { Input } from '@angular/core';
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
  @Input()
  get measure(): string {
    return this._measure;
  }
  set measure(measure: string) {
    this._measure = measure;
    this.serviceData.getAverageData()
      .then(response => {
        for (const value of response) {
          if (value.name == measure) {
            this.multi = value.series;
          }
        }
        if(this.measure == "Humidity") {
          this.colorScheme = {
            domain: ['#bcf7f3', '#3dd9eb', '#359ff0', '#104beb']
          };
        }
        if(this.measure == "Vox2") {
          this.colorScheme = {
            domain: ['#edf55d','#f7c136', '#f78336', '#f54327']
          };
        }
      })
      .catch(error => console.log(error));
  }
  private _measure: string;

  constructor(private serviceData : ServiceData) {
    Object.assign(this.multi);
  }

  ngOnInit() {
  }

  onSelect(data): void {
    //console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    //console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    //console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }



}
