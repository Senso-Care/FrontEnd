import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import html2canvas from 'html2canvas';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-wellness-page',
  templateUrl: './wellness-page.component.html',
  styleUrls: ['./wellness-page.component.scss']
})
export class WellnessPageComponent implements OnInit {
  measure = "Wellness";
  constructor() { }

  ngOnInit(): void {
  }

  docDefinition() {
    const measure = this.measure;
    return async () => {
      const chart = document.getElementById('lineChart');
       const chartPromise = html2canvas(chart, {
        height: 650,
        width: 1600,
        scale: 2,
        backgroundColor: null,
        logging: true,
        onclone: (document) => {
          document.getElementById('lineChart').style.visibility = 'visible';
        }
      });
      const table = document.getElementById('datatable');
      const tablePromise = html2canvas(table, {
        height: 650,
        width: 1600,
        scale: 2,
        backgroundColor: null,
        logging: true,
        onclone: (document) => {
          document.getElementById('datatable').style.visibility = 'visible';
        }
      });
      const canvas: HTMLCanvasElement = await chartPromise;
      const canvasTable: HTMLCanvasElement = await tablePromise;
      // Get chart data so we can append to the pdf
      const chartData = canvas.toDataURL();
      const tableData = canvasTable.toDataURL();
      // Prepare pdf structure
      const docDefinition = {
        content: [],
        styles: {
          tableHeader: {
            bold: true,
            fontSize: 10,
            color: 'black',
          },
          subheader: {
            fontSize: 13,
            bold: true,
            margin: [0, 10, 0, 5],
            alignment: 'left'
          },
          subsubheader: {
            fontSize: 10,
            italics: true,
            margin: [0, 10, 0, 25],
            alignment: 'left'
          },
          table: {
            margin: [0, 5, 0, 15]
          }
        },
        defaultStyle: {
          // alignment: 'justify'
        },
        pageOrientation: 'landscape',
      };
      // Add some content to the pdf
      const title = { text: "Home data provided by Senso'Care", style: 'subheader' };
      const description = { text: 'Wellness measures', style: 'subsubheader' };
      docDefinition.content.push(title);
      docDefinition.content.push(description);
      // Push image of the chart
      docDefinition.content.push({ image: chartData, width: 1000 });
      docDefinition.content.push({image: tableData, width: 1000});
      return docDefinition;
    }
  }

}
