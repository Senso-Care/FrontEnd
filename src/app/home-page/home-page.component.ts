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
  measure = "homePage";
  canvas: any;
  docDefinition: any;
  constructor(private serviceData: ServiceData) { }

  ngOnInit(): void {
    setTimeout(() => {
      // Charts are now rendered
      const chart = document.getElementById('lineChart');
      html2canvas(chart, {
        height: 500,
        width: 1000,
        scale: 3,
        backgroundColor: null,
        logging: false,
        onclone: (document) => {
          document.getElementById('lineChart').style.visibility = 'visible';
        }
      }).then((canvas) => {
        // Get chart data so we can append to the pdf
        const chartData = canvas.toDataURL();
        // Prepare pdf structure
        const docDefinition = {
          content: [],
          styles: {
            tableHeader: {
              bold: true,
              fontSize: 13,
              color: 'black'
            },
            subheader: {
              fontSize: 16,
              bold: true,
              margin: [0, 10, 0, 5],
              alignment: 'left'
            },
            subsubheader: {
              fontSize: 12,
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
        const title = { text: 'Here is the export of charts to the PDF', style: 'subheader' };
        const description = { text: 'Line charts with all measures', style: 'subsubheader' };
        docDefinition.content.push(title);
        docDefinition.content.push(description);
        // Push image of the chart
        docDefinition.content.push({ image: chartData, width: 800 });
        this.docDefinition = docDefinition;
        // pdfMake.createPdf(docDefinition).download('chartToPdf' + '.pdf');
      });
    }, 3000);
  }

  /*async generatePdf() {
    const documentDefinition = await this.getDataForPdf();
    pdfMake.createPdf(documentDefinition).open();
  }

  async getDataForPdf() {
    const data = JSON.stringify(await this.serviceData.getAllData());
    console.log(data);
    return {
      content: data
    };
  }*/

  downloadChart() {
    // Download PDF
    if (this.docDefinition) {
      pdfMake.createPdf(this.docDefinition).download('chartToPdf' + '.pdf');
    } else {
      console.log('Chart is not yet rendered!');
    }
  }
}
