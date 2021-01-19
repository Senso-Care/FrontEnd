import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TemperaturePageComponent } from './temperature-page/temperature-page.component';
import { WellnessPageComponent } from './wellness-page/wellness-page.component';
import { DatatableComponent } from './datatable/datatable.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxChartsLineChartComponent } from './ngx-charts-line-chart/ngx-charts-line-chart.component';
import { NgxChartsHeatMapComponent } from './ngx-charts-heat-map/ngx-charts-heat-map.component';
import { NgxChartsGaugeComponent } from './ngx-charts-gauge/ngx-charts-gauge.component';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ServiceData } from './service-data/service-data';
import { GenericMetricBoardComponent } from './generic-metric-board/generic-metric-board.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomePageComponent,
    TemperaturePageComponent,
    WellnessPageComponent,
    DatatableComponent,
    NgxChartsLineChartComponent,
    NgxChartsHeatMapComponent,
    NgxChartsGaugeComponent,
    GenericMetricBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NgxDatatableModule,
    FormsModule,
    NgxChartsModule,
    NgbModule,
  ],
  providers: [
    ServiceData
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
