import { Component } from '@angular/core';
import { Weather } from '../../models/weather.model';
import { WeatherService } from '../../services/weather.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-weather-info-page',
  templateUrl: './weather-info-page.component.html',
  styleUrls: ['./weather-info-page.component.scss'],
})
export class WeatherInfoPageComponent {
  weathers: Weather[] = [];

  constructor(private weatherService: WeatherService) {
    this.weatherService
      .getAll()
      .pipe(
        map((x) => {
          x.entities?.forEach((y) => {
            let item = new Weather();
            item.id = y.id;
            item.date = y.date;
            item.description = y.description;
            item.temperature = y.temperature;

            this.weathers.push(item);
          });
        })
      )
      .subscribe();
  }
}
