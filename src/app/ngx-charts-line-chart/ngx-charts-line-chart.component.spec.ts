import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxChartsLineChartComponent } from './ngx-charts-line-chart.component';

describe('NgxChartsLineChartComponent', () => {
  let component: NgxChartsLineChartComponent;
  let fixture: ComponentFixture<NgxChartsLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxChartsLineChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxChartsLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
