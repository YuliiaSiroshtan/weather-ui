import { Component, Input } from '@angular/core';
import { Weather } from '../../models/weather.model';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent {
  @Input() weatherInfo: Weather = new Weather();

  editModeEnabled = false;
}
