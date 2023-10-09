import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCreatePageComponent } from './weather-create-page.component';

describe('WeatherCreatePageComponent', () => {
  let component: WeatherCreatePageComponent;
  let fixture: ComponentFixture<WeatherCreatePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherCreatePageComponent]
    });
    fixture = TestBed.createComponent(WeatherCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
