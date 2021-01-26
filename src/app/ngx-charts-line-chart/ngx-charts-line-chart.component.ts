import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { DefaultService, Metric, SensorData } from 'src/modules/angular';
import { ServiceData } from '../service-data/service-data';

@Component({
  selector: 'app-ngx-charts-line-chart',
  templateUrl: './ngx-charts-line-chart.component.html',
  styleUrls: ['./ngx-charts-line-chart.component.scss']
})
export class NgxChartsLineChartComponent implements OnInit {
  multi: any[] = [
    {
      "name": "NoData",
      "series": [
        {
          "name": "00-00-0000",
          "value": 0
        }
      ]
    }
  ];
  view: any[] = [600, 200];
  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Time';
  yAxisLabel: string = 'Values';
  timeline: boolean = true;
  autoscale: boolean = true;
  colorScheme = {
    domain: ['#5AA454', '#247ad6', '#e34529', '#b762f0']
  };

  @Input()
  get measure(): string {
    return this._measure;
  }
  set measure(measure: string) {
    this._measure = measure;
    this.api.getMetricsFromType(measure.toLowerCase(), '80d').subscribe(
      (result: Metric) => {
        if (this.measure == "All_sensors") {
          //this.multi = result.sensors;
        }
        else {

          //this.multi = result.sensors.map((obj: SensorData) => {
          //  return { name: obj.name, series: obj.series.map(data => { return { name: data.date, value: data.value } }) }
          //});
          this.multi = [];
          for (const sensor of result.sensors) {
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
          console.log(this.multi);
          //this.multi = result.sensors;

          /*if (this.measure == "Temperature") {
            this.colorScheme = {
              domain: ['#5AA454']
            };
          }
          else if (this.measure == "Humidity") {
            this.colorScheme = {
              domain: ['#247ad6']
            };
          }
          else if (this.measure == "Vox2") {
            this.colorScheme = {
              domain: ['#e34529']
            };
          }
          else if (this.measure == "Wellness") {
            this.colorScheme = {
              domain: ['#b762f0']
            };
          }
          else {
            this.colorScheme = {
              domain: ['#acb3c2']
            };
          }*/
        }
      }
    );
    /*this.serviceData.getAllData()
      .then(response => {


      })
      .catch(error => console.log(error));*/
  }
  private _measure: string;

  constructor(private api: DefaultService) {
    Object.assign(this.multi);
  }

  ngOnInit(): void {
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
