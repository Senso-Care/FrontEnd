import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { TemperaturePageComponent } from './temperature-page/temperature-page.component';
import { WellnessPageComponent } from './wellness-page/wellness-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'temperature', component: TemperaturePageComponent },
  { path: 'wellness', component: WellnessPageComponent },
  { path: '', redirectTo: '‘/home', pathMatch: 'full' },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
