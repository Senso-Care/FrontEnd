import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {

  rows = [
    { measure: 'Austin', date: 'Male', value: 'Swimlane' },
  ];
  columns = [{ prop: 'Measure' }, { name: 'Date' }, { name: 'Value' }];

  constructor() { }

  ngOnInit(): void {
  }

}
