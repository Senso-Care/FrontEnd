import { Component, Input, OnInit } from '@angular/core';
import { ServiceData } from '../service-data/service-data';

@Component({
  selector: 'app-ngx-charts-gauge',
  templateUrl: './ngx-charts-gauge.component.html',
  styleUrls: ['./ngx-charts-gauge.component.scss']
})
export class NgxChartsGaugeComponent implements OnInit {
  single = [
    {
      "name": "NoData",
      "value": 0
    }
  ];
  //view: any[] = [500, 400];
  legend: boolean = true;
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
    this.serviceData.getLastData()
      .then(response => {
        for (const value of response) {
          if (value.name == measure) {
            this.single = [value];
            console.log(this.single);
          }
        }
      })
      .catch(error => console.log(error));
  }
  private _measure: string;


  constructor(private serviceData: ServiceData) {
    Object.assign(this.single);
  }

  ngOnInit() {
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
