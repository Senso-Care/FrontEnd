import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenericMetricBoardComponent } from './generic-metric-board/generic-metric-board.component';
import { HomePageComponent } from './home-page/home-page.component';
import { WellnessPageComponent } from './wellness-page/wellness-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'board/wellness', component: WellnessPageComponent },
  { path: 'board', component: HomePageComponent},
  { path: 'board/:measure', component: GenericMetricBoardComponent },
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
