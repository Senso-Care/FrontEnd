import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxChartsHeatMapComponent } from './ngx-charts-heat-map.component';

describe('NgxChartsHeatMapComponent', () => {
  let component: NgxChartsHeatMapComponent;
  let fixture: ComponentFixture<NgxChartsHeatMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxChartsHeatMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxChartsHeatMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
