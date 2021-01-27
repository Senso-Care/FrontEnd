import { ValueTransformer } from '@angular/compiler/src/util';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ServiceData } from '../service-data/service-data';
import { Measure } from './measure.interface';
import { DefaultService, Metric, SensorData } from 'src/modules/angular';
import { Observable, Subscription } from 'rxjs';
import { Table } from 'primeng/table';

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
  @ViewChild("table") table: Table;

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
    this.subscription = this.api.getMetricsFromType(measure.toLowerCase(), range).subscribe(
      (result: Metric) => {
        const rows = [];
        if (result.sensors != null && result.sensors != undefined) {
          for (const sensor of result.sensors) {
            for (const dataPoint of sensor.series) {
              rows.push({
                measure: sensor.name,
                date: dataPoint.date,
                value: dataPoint.value,
                info: dataPoint.info
              });
            }
          }
        }
        this.table.reset();
        this.table.clearState();
        this.rows = rows;
      }
    );
  }

  constructor(private api: DefaultService) { }

  ngOnInit(): void {
    this.cols = [
      { field: 'measure', header: 'Measure' },
      { field: 'date', header: 'Date' },
      { field: 'value', header: 'Value' },
    ];
    if (this.measure.toLowerCase() == "wellness") {
      this.cols.push({field: 'info', header: 'Info'});
    }
    //this.table.reset();
  }
}
