import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellnessPageComponent } from './wellness-page.component';

describe('WellnessPageComponent', () => {
  let component: WellnessPageComponent;
  let fixture: ComponentFixture<WellnessPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WellnessPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WellnessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
