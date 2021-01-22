import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceData } from '../service-data/service-data';
import html2canvas from 'html2canvas';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  measure = "all";
  canvas: any;
  constructor(private serviceData: ServiceData) { }


  docDefinition() {
    const measure = this.measure;
    return async () => {
      const chart = document.getElementById('lineChart');
      const canvas: HTMLCanvasElement = await html2canvas(chart, {
        height: 600,
        width: 1550,
        scale: 3,
        backgroundColor: null,
        logging: true,
        onclone: (document) => {
          document.getElementById('lineChart').style.visibility = 'visible';
        }
      });

      // Get chart data so we can append to the pdf
      const chartData = canvas.toDataURL();

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
      const description = { text: 'Line charts with ' + measure + ' measures', style: 'subsubheader' };
      docDefinition.content.push(title);
      docDefinition.content.push(description);
      // Push image of the chart
      docDefinition.content.push({ image: chartData, width: 1000 });
      return docDefinition;
    }
  }

  ngOnInit(): void {
  }

}
