import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { map } from 'rxjs';
import { Weather } from './models/weather.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent {}
