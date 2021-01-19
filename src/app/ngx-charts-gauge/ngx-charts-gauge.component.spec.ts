import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxChartsGaugeComponent } from './ngx-charts-gauge.component';

describe('NgxChartsGaugeComponent', () => {
  let component: NgxChartsGaugeComponent;
  let fixture: ComponentFixture<NgxChartsGaugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxChartsGaugeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxChartsGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
