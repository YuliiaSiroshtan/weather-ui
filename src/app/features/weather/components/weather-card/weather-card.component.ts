import { Component, Input, OnInit } from '@angular/core';
import { Weather } from '../../models/weather.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent implements OnInit {
  @Input() weatherInfo: Weather = new Weather();

  editModeEnabled = false;

  weatherForm = new FormGroup({
    temperature: new FormControl(0, [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherForm.setValue({
      temperature: this.weatherInfo.temperature!,
      description: this.weatherInfo.description!,
    });
  }

  saveWeather() {
    if (this.weatherForm.untouched || this.weatherForm.invalid) {
      return;
    }

    let weather = new Weather();
    weather.id = this.weatherInfo.id;
    weather.temperature = this.weatherForm.controls.temperature.value!;
    weather.description = this.weatherForm.controls.description.value!;
    weather.date = this.weatherInfo.date;

    this.weatherService.update(weather).subscribe(() => {
      this.weatherInfo.temperature = weather.temperature;
      this.weatherInfo.description = weather.description;
    });
  }
}
