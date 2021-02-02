import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, of, timer } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { DefaultService } from 'src/modules/angular';
import { DisplayConstants } from 'src/app/display.constants';
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {

  metrics$: Observable<string[]> = of([]);
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private api: DefaultService) {
  }

  ngOnInit() {
    this.metrics$  = timer(0, DisplayConstants.REFRESH_RATE).pipe<string[]>(
      switchMap(() => this.api.getMetrics(DisplayConstants.DEFAULT_RANGE))
    )
  }

  ngOnDestroy() {
  }
}
