import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ServiceData } from '../service-data/service-data';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {
  dataTemperature = false;
  dataHumidity = false;
  dataHeart = false;
  dataWellness = false;

  metrics = ["Temperature", "Humidity", "Vox2"]

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private serviceData : ServiceData) {
    this.automaticMenu();
  }

  automaticMenu() {
    this.serviceData.getMultiData()
      .then(response => {
        for (const value of response) {
          if(value.name == "Temperature") {
            this.dataTemperature = true;
          }
          if(value.name == "Humidity") {
            this.dataHumidity = true;
          }
          if(value.name == "Heart") {
            this.dataHeart = true;
          }
          if(value.name == "Wellness") {
            this.dataWellness = true;
          }
        }
      })
      .catch(error => console.log(error));
  }
}
