import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, of, timer } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { DefaultService } from 'src/modules/angular';
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {

  private static readonly TIMEOUT = 30000;
  private static readonly DEFAULT_RANGE = '7d';
  metrics$: Observable<string[]> = of([]);
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private api: DefaultService) {
  }

  ngOnInit() {
    this.metrics$  = timer(0, NavMenuComponent.TIMEOUT).pipe<string[]>(
      switchMap(() => this.api.getMetrics(NavMenuComponent.DEFAULT_RANGE))
    )
  }

  ngOnDestroy() {
  }
}
