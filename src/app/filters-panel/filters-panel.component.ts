import { DIR_DOCUMENT_FACTORY } from '@angular/cdk/bidi/dir-document-token';
import { MatButtonModule } from '@angular/material/button';
import { Output, EventEmitter } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-filters-panel',
  templateUrl: './filters-panel.component.html',
  styleUrls: ['./filters-panel.component.scss']
})
export class FiltersPanelComponent implements OnInit {
  range = [{
    text: "Last 2 hours",
    value: "2h"
  },
  {
    text: "Last 10 hours",
    value: "10h"
  },
  {
    text: "Last 24 hours",
    value: "24h"
  },
  {
    text: "Last 3 days",
    value: "3d"
  },
  {
    text: "Last 7 days",
    value: "7d"
  }
  ];
  _selectedRange: string = "24h";
  get selectedRange(): string {
    return this._selectedRange
  }
  set selectedRange(range: string) {
    this._selectedRange = range;
    this.onSelectedRange.emit(this._selectedRange);
  }
  @Output() onSelectedRange = new EventEmitter<string>();

  @Input()
  get measure(): string {
    return this._measure;
  }
  set measure(measure: string) {
    this._measure = measure;
  }
  private _measure: string;

  @Input()
  get docDefinition(): any {
    return this._docDefinition;
  }
  set docDefinition(docDefinition: any) {
    this._docDefinition = docDefinition;
  }
  private _docDefinition: any;


  constructor() { }

  ngOnInit(): void {
  }

  downloadChart() {
    this.docDefinition().then(docDef => {
      pdfMake.createPdf(docDef).download(this.measure + '.pdf');
    });

  }
}
