import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngx-charts-heat-map',
  templateUrl: './ngx-charts-heat-map.component.html',
  styleUrls: ['./ngx-charts-heat-map.component.scss']
})
export class NgxChartsHeatMapComponent implements OnInit {

  multi = [
    {
      "name": "May",
      "series": [
        {
          "name": "Sun",
          "value": 20
        },
        {
          "name": "Sat",
          "value": 25
        },
        {
          "name": "Thu",
          "value": 27
        },
        {
          "name": "Wed",
          "value": 32
        },
        {
          "name": "Tue",
          "value": 24
        },
        {
          "name": "Mon",
          "value": 22
        }
      ]
    },

    {
      "name": "June",
      "series": [
        {
          "name": "Sun",
          "value": 22
        },
        {
          "name": "Sat",
          "value": 24
        },
        {
          "name": "Thu",
          "value": 27
        },
        {
          "name": "Wed",
          "value": 26
        },
        {
          "name": "Tue",
          "value": 28
        },
        {
          "name": "Mon",
          "value": 25
        }
      ]
    },

    {
      "name": "July",
      "series": [
        {
          "name": "Sun",
          "value": 25
        },
        {
          "name": "Sat",
          "value": 26
        },
        {
          "name": "Thu",
          "value": 33
        },
        {
          "name": "Wed",
          "value": 32
        },
        {
          "name": "Tue",
          "value": 30
        },
        {
          "name": "Mon",
          "value": 34
        }
      ]
    },
    {
      "name": "September",
      "series": [
        {
          "name": "Sun",
          "value": 15
        },
        {
          "name": "Sat",
          "value": 16
        },
        {
          "name": "Thu",
          "value": 20
        },
        {
          "name": "Wed",
          "value": 17
        },
        {
          "name": "Tue",
          "value": 13
        },
        {
          "name": "Mon",
          "value": 18
        }
      ]
    },
    {
      "name": "Decembre",
      "series": [
        {
          "name": "Sun",
          "value": 5
        },
        {
          "name": "Sat",
          "value": 7
        },
        {
          "name": "Thu",
          "value": 11
        },
        {
          "name": "Wed",
          "value": 8
        },
        {
          "name": "Tue",
          "value": 4
        },
        {
          "name": "Mon",
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

  constructor() {
    Object.assign(this.multi );
  }

  ngOnInit(): void {
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
