import { Injectable } from '@angular/core';
import { ApiClient } from 'src/app/core/services/api-client.service';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private client: ApiClient) {}

  getAll() {
    return this.client.weathersGET();
  }
}
