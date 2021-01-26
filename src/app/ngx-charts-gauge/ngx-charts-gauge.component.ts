import { Component, Input, OnInit } from '@angular/core';
import { ServiceData } from '../service-data/service-data';
import { DefaultService, Metric, SensorData } from 'src/modules/angular';

@Component({
  selector: 'app-ngx-charts-gauge',
  templateUrl: './ngx-charts-gauge.component.html',
  styleUrls: ['./ngx-charts-gauge.component.scss']
})
export class NgxChartsGaugeComponent implements OnInit {
  single: any = [
    {
      "name": "NoData",
      "value": 0
    }
  ];
  //view: any[] = [400, 300];
  legend: boolean = true;
  min = -10;
  max = 60;
  legendPosition: string = 'below';
  colorScheme = {
    domain: ['#5AA454']
  };
  @Input()
  get measure(): string {
    return this._measure;
  }
  set measure(measure: string) {
    this._measure = measure;
    this.api.getLastMetrics(measure.toLowerCase(), '7d').subscribe(
      (result: SensorData[]) => {
        this.single = [];
        for (const sensor of result) {
          console.log(sensor.name);
          /*if(sensor.name.toLowerCase().startsWith("temperature")) {
            this.colorScheme = {
              domain: ['#5AA454']
            };
          }*/
          this.single = [{
            name: new Date(sensor.series[0].date),
            value: sensor.series[0].value
          }];
        }
      }
    );
  }
  private _measure: string;


  constructor(private api: DefaultService) {
    Object.assign(this.single);
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
