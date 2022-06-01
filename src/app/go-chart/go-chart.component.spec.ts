import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoChartComponent } from './go-chart.component';

describe('GoChartComponent', () => {
  let component: GoChartComponent;
  let fixture: ComponentFixture<GoChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
