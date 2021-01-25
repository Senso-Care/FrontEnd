import { DIR_DOCUMENT_FACTORY } from '@angular/cdk/bidi/dir-document-token';
import { MatButtonModule } from '@angular/material/button';
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
  range = [
    "Last 10 minutes",
    "Last 30 minutes",
    "Last hour",
    "Last 3 hours",
    "Last 24 hours",
    "Last 3 days",
    "Last 7 days",
    "Last 30 days"
  ];
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
