import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngx-charts-line-chart',
  templateUrl: './ngx-charts-line-chart.component.html',
  styleUrls: ['./ngx-charts-line-chart.component.scss']
})
export class NgxChartsLineChartComponent implements OnInit {
  multi = [
    {
      "name": "Temperature",
      "series": [
        {
          "name": "23-05-2020",
          "value": 24
        },
        {
          "name": "28-05-2020",
          "value": 22
        },
        {
          "name": "08-07-2020",
          "value": 28
        }
      ]
    },

    {
      "name": "Humidity",
      "series": [
        {
          "name": "23-05-2020",
          "value": 89
        },
        {
          "name": "28-05-2020",
          "value": 80
        },
        {
          "name": "08-07-2020",
          "value": 87
        }
      ]
    },

    {
      "name": "Heart",
      "series": [
        {
          "name": "23-05-2020",
          "value": 14
        },
        {
          "name": "28-05-2020",
          "value": 12
        },
        {
          "name": "08-07-2020",
          "value": 14
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
  xAxisLabel: string = 'Time';
  yAxisLabel: string = 'Sensors';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() {
    Object.assign(this.multi );
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
