import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {

  /*rows = [
    { measure: 'Austin', date: 'Male', value: 'Swimlane' },
  ];
  columns = [{ prop: 'Measure' }, { name: 'Date' }, { name: 'Value' }];*/
  rows: any[];
  cols: any[];

  constructor() { }

  ngOnInit(): void {
    this.rows = [
      { measure: '1', date: 'kiran', value:'kiran@gmail.com' },
      { measure: '2', date: 'tom', value:'tom@gmail.com' },
      { measure: '3', date: 'john', value:'john@gmail.com' },
      { measure: '4', date: 'Frank', value:'frank@gmail.com' },

  ];
    this.cols = [
      { field: 'measure', header: 'Measure' },
      { field: 'date', header: 'Date' },
      { field: 'value', header: 'Value' },
  ];
  }

}
