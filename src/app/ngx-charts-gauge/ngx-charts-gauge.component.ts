import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngx-charts-gauge',
  templateUrl: './ngx-charts-gauge.component.html',
  styleUrls: ['./ngx-charts-gauge.component.scss']
})
export class NgxChartsGaugeComponent implements OnInit {

  single = [
    {
      "name": "Temperature",
      "value": 24
    }
  ];
  view: any[] = [500, 400];
  legend: boolean = true;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#5AA454']
  };

  constructor() {
    Object.assign(this.single );
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

  ngOnInit(): void {
  }

}
