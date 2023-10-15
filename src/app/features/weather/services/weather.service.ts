import { Injectable } from '@angular/core';
import {
  ApiClient,
  WeatherApiEntity,
  WeatherApiRequest,
} from 'src/app/core/services/api-client.service';
import { Weather } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private client: ApiClient) {}

  getAll() {
    return this.client.weathersGET();
  }

  add(weather: Weather) {
    let weatherInfo = new WeatherApiRequest();
    weatherInfo.temperature = weather.temperature;
    weatherInfo.description = weather.description;
    weatherInfo.date = weather.date;

    return this.client.weathersPOST(weatherInfo);
  }

  update(weather: Weather) {
    let weatherInfo = new WeatherApiEntity();
    weatherInfo.id = weather.id;
    weatherInfo.temperature = weather.temperature;
    weatherInfo.description = weather.description;
    weatherInfo.date = weather.date;

    return this.client.weathersPUT(weatherInfo);
  }
}
