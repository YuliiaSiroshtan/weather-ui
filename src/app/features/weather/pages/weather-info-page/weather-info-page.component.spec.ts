import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherInfoPageComponent } from './weather-info-page.component';

describe('WeatherInfoPageComponent', () => {
  let component: WeatherInfoPageComponent;
  let fixture: ComponentFixture<WeatherInfoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherInfoPageComponent]
    });
    fixture = TestBed.createComponent(WeatherInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
