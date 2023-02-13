import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FanSeriesComponent } from './fan-series.component';

describe('FanSeriesComponent', () => {
  let component: FanSeriesComponent;
  let fixture: ComponentFixture<FanSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FanSeriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FanSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
