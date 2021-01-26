import { Injectable, Optional } from '@angular/core';
import { ApiModule, DefaultService } from 'src/modules/angular';
//import { HttpClient } from '@angular/common/http';

export interface DataInfo {
  temperature: number,
  humidity: number,
  heart: number,
  wellness: number
}

@Injectable()
export class ServiceData {
  /*constructor(private HttpClient: HttpClient) {

  }*/

  constructor(private api: DefaultService) {
  }

  async getLastData() {
    let single = [
      {
        "name": "Temperature",
        "value": 24
      },
      {
        "name": "Humidity",
        "value": 84
      },
      {
        "name": "Heart",
        "value": 12
      },
      {
        "name": "Sound",
        "value": 98
      },
      {
        "name": "Wellness",
        "value": 10
      },
    ];

    return single;
  }


  async getAverageData() {
    let averageData = [
      {
        "name": "Temperature",
        "series": [
          {
            "name": "Monday",
            "series": [
              {
                "name": "00",
                "value": 22
              },
              {
                "name": "01",
                "value": 20
              },
              {
                "name": "02",
                "value": 25
              },
              {
                "name": "03",
                "value": 27
              },
              {
                "name": "04",
                "value": 32
              },
              {
                "name": "05",
                "value": 24
              },
              {
                "name": "06",
                "value": 22
              },
              {
                "name": "07",
                "value": 20
              },
              {
                "name": "08",
                "value": 25
              },
              {
                "name": "09",
                "value": 27
              },
              {
                "name": "10",
                "value": 32
              },
              {
                "name": "11",
                "value": 24
              },
              {
                "name": "12",
                "value": 22
              }
              ,
              {
                "name": "13",
                "value": 20
              },
              {
                "name": "14",
                "value": 25
              },
              {
                "name": "15",
                "value": 27
              },
              {
                "name": "16",
                "value": 32
              },
              {
                "name": "17",
                "value": 24
              },
              {
                "name": "18",
                "value": 22
              },
              {
                "name": "19",
                "value": 27
              },
              {
                "name": "20",
                "value": 32
              },
              {
                "name": "21",
                "value": 24
              },
              {
                "name": "22",
                "value": 22
              },{
                "name": "23",
                "value": 22
              }
            ]
          }
        ]
      },
      {
      "name": "Humidity",
        "series": [
          {
            "name": "January",
            "series": [
              {
                "name": "Sun",
                "value": 81
              },
              {
                "name": "Sat",
                "value": 80
              },
              {
                "name": "Thu",
                "value": 83
              },
              {
                "name": "Wed",
                "value": 82
              },
              {
                "name": "Tue",
                "value": 89
              },
              {
                "name": "Mon",
                "value": 22
              }
            ]
          },
        ]
      },
      {
        "name": "Sound",
          "series": [
            {
              "name": "January",
              "series": [
                {
                  "name": "Sun",
                  "value": 90
                },
                {
                  "name": "Sat",
                  "value": 96
                },
                {
                  "name": "Thu",
                  "value": 80
                }
              ]
            },
          ]
        },
        {
          "name": "Wellness",
            "series": [
              {
                "name": "January",
                "series": [
                  {
                    "name": "Sun",
                    "value": 8
                  },
                  {
                    "name": "Sat",
                    "value": 7
                  },
                  {
                    "name": "Thu",
                    "value": 4
                  },
                  {
                    "name": "Wed",
                    "value": 8
                  },
                  {
                    "name": "Tue",
                    "value": 2
                  },
                  {
                    "name": "Mon",
                    "value": 10
                  }
                ]
              },
            ]
          },

    ];

    return averageData;
  }

  async getAllData() {
    let multi = [
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
          },
          {
            "name": "22-12-2020",
            "value": 10
          },
          {
            "name": "25-12-2020",
            "value": 4
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
        "name": "Sound",
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
      },
      {
        "name": "Wellness",
        "series": [
          {
            "name": "23-05-2020",
            "value": 10
          },
          {
            "name": "28-05-2020",
            "value": 1
          },
          {
            "name": "08-07-2020",
            "value": 4
          },
          {
            "name": "22-12-2020",
            "value": 6
          },
          {
            "name": "24-12-2020",
            "value": 10
          }
        ]
      }
    ];
    return multi;
  }

}
