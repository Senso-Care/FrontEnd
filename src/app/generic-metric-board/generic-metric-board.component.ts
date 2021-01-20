import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-generic-metric-board',
  templateUrl: './generic-metric-board.component.html',
  styleUrls: ['./generic-metric-board.component.scss']
})
export class GenericMetricBoardComponent implements OnInit {

  measure = "generic";

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
  }

  updateMeasure(url: string): void {
    this.measure = url.replace(/^.*[\\\/]/, '');
  }

}
