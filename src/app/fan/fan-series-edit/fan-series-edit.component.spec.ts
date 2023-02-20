import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FanSeriesEditComponent } from './fan-series-edit.component';

describe('FanSeriesEditComponent', () => {
  let component: FanSeriesEditComponent;
  let fixture: ComponentFixture<FanSeriesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FanSeriesEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FanSeriesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
