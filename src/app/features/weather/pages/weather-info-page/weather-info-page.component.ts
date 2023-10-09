import { Component } from '@angular/core';
import { Weather } from '../../models/weather.model';

@Component({
  selector: 'app-weather-info-page',
  templateUrl: './weather-info-page.component.html',
  styleUrls: ['./weather-info-page.component.scss']
})
export class WeatherInfoPageComponent {
  weathers: Weather[] = [{
    date: new Date(Date.now()),
    description: 'test'
  }];
}
