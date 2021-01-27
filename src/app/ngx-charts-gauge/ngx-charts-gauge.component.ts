import { Component, Input, OnInit } from '@angular/core';
import { ServiceData } from '../service-data/service-data';
import { DefaultService, Metric, SensorData } from 'src/modules/angular';
import { Observable, Subscription } from 'rxjs';

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
  sum: number = 0;
  mean: number = 0;
  view: any[] = [1200, 0];
  legend: boolean = true;
  min = -10;
  max = 60;
  legendPosition: string = 'right';
  colorScheme = {
    domain: ['#5AA454', '#247ad6', '#e34529', '#b762f0', '#acb3c2', "#f59714", "#fa93fa", "#a3eb6c", "#6de8e8"]
  };
  @Input()
  get range() : string {
    return this._range;
  }
  set range(value: string) {
    this._range = value;
    this.getMeasures(this.measure, this.range);
  }
  private _range: string;


  @Input()
  get measure(): string {
    return this._measure;
  }
  set measure(measure: string) {
    this._measure = measure;
    this.getMeasures(this.measure, this.range);
  }
  private _measure: string;

  subscription: Subscription;

  getMeasures(measure: string, range: string) {
    if (measure == null || range == null)
      return;
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
    this._measure = measure;
    this.api.getLastMetrics(measure.toLowerCase(), this.range).subscribe(
      (result: SensorData[]) => {
        const values = [];
        this.sum = 0;
        this.mean = 0;
        console.log(result)
        for (const sensor of result) {
          console.log(sensor.name);
          /*if(sensor.name.toLowerCase().startsWith("temperature")) {
            this.colorScheme = {
              domain: ['#5AA454']
            };
          }*/

          const value = Number(sensor.series[0].value.toFixed(2));
          values.push({
            name: sensor.name,
            value: value
          });
          this.sum += value;
        }
        this.single = values;
        if (this.single.length == 0)
          return;
        this.mean = Number((this.sum / this.single.length).toFixed(2));
      }
    );
  }



  constructor(private api: DefaultService) {
    Object.assign(this.single);
  }

  valueFormatting = (value: number): number => {
    if (value == 0) return 0.001
    if (value != this.sum)
      return value;
    return this.mean;
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
