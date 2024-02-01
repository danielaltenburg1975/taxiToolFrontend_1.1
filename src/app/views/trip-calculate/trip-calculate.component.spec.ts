import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripCalculateComponent } from './trip-calculate.component';

describe('TripCalculateComponent', () => {
  let component: TripCalculateComponent;
  let fixture: ComponentFixture<TripCalculateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TripCalculateComponent]
    });
    fixture = TestBed.createComponent(TripCalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
