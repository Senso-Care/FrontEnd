import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ServiceData } from '../service-data/service-data';
import { DefaultService, Metric, SensorData } from 'src/modules/angular';

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
  xAxisLabel: string = 'Days';
  yAxisLabel: string = 'Hours';
  colorScheme = {
    domain: ['#4236c9','#4d9ce5', '#34b8f9', '#23c175', '#e5c84d', '#f98d34', '#f95c34', '#f93434']
  };
  @Input()
  get measure(): string {
    return this._measure;
  }
  set measure(measure: string) {
    /*
    this._measure = measure;
    this.api.getMetricsFromType(measure.toLowerCase(), '60d').subscribe(
      (result: Metric) => {
        this.multi = [];
        for (const sensor of result.sensors) {
          if (sensor.name.startsWith("Humidity" || "humidity")) {
            this.colorScheme = {
              domain: ['#bcf7f3', '#3dd9eb', '#359ff0', '#104beb']
            };
          }
          else if (sensor.name.startsWith("Vox2" || "vox2")) {
            this.colorScheme = {
              domain: ['#edf55d','#f7c136', '#f78336', '#f54327']
            };
          }
          else if (sensor.name.startsWith("Wellness" || "wellness")) {
            this.colorScheme = {
              domain: ['#b762f0']
            };
          }
          const series = {
            name: sensor.name || 'Unknown',
            series: sensor.series.map(obj => {
              return {
                name: new Date(obj.date),
                value: obj.value
              }
            })
          }
          this.multi.push(series);
        }
        if (this.measure == "All_sensors") {
          //this.multi = result.sensors;
        }
      }
    );*/
  }
  private _measure: string;

  constructor(private api: DefaultService) {
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
