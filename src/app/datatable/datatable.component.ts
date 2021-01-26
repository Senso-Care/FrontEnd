import { ValueTransformer } from '@angular/compiler/src/util';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ServiceData } from '../service-data/service-data';
import { Measure } from './measure.interface';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {
  rows: Measure[] = [];
  cols: any[];
  exportColumns: any;
  measures: any;
  @Input()
  get measure(): string {
    return this._measure;
  }
  @Input()
  range: string;
  @ViewChild("table")
  table;
  set measure(measure: string) {
    this._measure = measure;
    this.serviceData.getAllData()
      .then(response => {
        if (this.measure == "All_sensors") {
          for (const value of response) {
            for (const serie of value.series) {
              this.rows.push({
                measure: value.name,
                date: serie.name,
                value: serie.value
              });
            }
          }
        }
        else {
          for (const value of response) {
            if (value.name == measure) {
              for (const serie of value.series) {
                this.rows.push({
                  measure: value.name,
                  date: serie.name,
                  value: serie.value
                });
              }
            }
          }
        }
        this.table.reset();
      })
      .catch(error => console.log(error));
  }
  private _measure: string;

  constructor(private serviceData: ServiceData) { }

  ngOnInit(): void {
    this.cols = [
      { field: 'measure', header: 'Measure' },
      { field: 'date', header: 'Date' },
      { field: 'value', header: 'Value' },
    ];
  }
}
