import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericMetricBoardComponent } from './generic-metric-board.component';

describe('GenericMetricBoardComponent', () => {
  let component: GenericMetricBoardComponent;
  let fixture: ComponentFixture<GenericMetricBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericMetricBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericMetricBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
