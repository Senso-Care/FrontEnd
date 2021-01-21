import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-generic-metric-board',
  templateUrl: './generic-metric-board.component.html',
  styleUrls: ['./generic-metric-board.component.scss']
})
export class GenericMetricBoardComponent implements OnInit {

  measure = "generic";
  docDefinition: any;

  constructor(public router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
    this.updateMeasure(router.url);
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const routerEvent = event as NavigationEnd;
        this.updateMeasure(routerEvent.url);
      }
    });
    setTimeout(() => {
      // Charts are now rendered
      const chart = document.getElementById('lineChart');
      html2canvas(chart, {
        height: 500,
        width: 1300,
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
        const title = { text: 'Home data to the PDF', style: 'subheader' };
        const description = { text: 'Line charts with ' + this.measure +  ' measures', style: 'subsubheader' };
        docDefinition.content.push(title);
        docDefinition.content.push(description);
        // Push image of the chart
        docDefinition.content.push({ image: chartData, width: 875 });
        this.docDefinition = docDefinition;
        // pdfMake.createPdf(docDefinition).download('chartToPdf' + '.pdf');
      });
    }, 3000);
  }

  updateMeasure(url: string): void {
    this.measure = url.replace(/^.*[\\\/]/, '');
  }

}
