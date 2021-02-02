import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable, of, Subscription, timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { DefaultService, Metric } from 'src/modules/angular';
import { DisplayConstants } from '../display.constants';

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
    domain: ['#5AA454', '#247ad6', '#e34529', '#b762f0', '#acb3c2', "#f59714", "#fa93fa", "#a3eb6c", "#6de8e8"]
  };
  _range: string = DisplayConstants.DEFAULT_RANGE;
  @Input()
  get range() : string {
    return this._range;
  }
  set range(value: string) {
    this._range = value;
    this.getMeasures(this.measure, this.range);
  }

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
    this.subscription = timer(0, DisplayConstants.REFRESH_RATE).pipe<Metric>(
      switchMap(() => this.api.getMetricsFromType(measure.toLowerCase(), range))
    ).subscribe((result: Metric) => {
      this.multi = [];
      if (result.sensors == null)
        return;
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
    });
  }

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
