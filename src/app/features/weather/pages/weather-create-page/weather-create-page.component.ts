import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Weather } from '../../models/weather.model';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather-create-page',
  templateUrl: './weather-create-page.component.html',
  styleUrls: ['./weather-create-page.component.scss'],
})
export class WeatherCreatePageComponent {
  weatherCreateForm = new FormGroup({
    date: new FormControl({}, [Validators.required]),
    temperature: new FormControl(0, [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  showInternalServerError = false;

  constructor(private weatherService: WeatherService, private router: Router) {}

  addWeather() {
    this.showInternalServerError = false;

    if (this.weatherCreateForm.invalid) {
      return;
    }

    let date = this.weatherCreateForm.controls.date.value! as NgbDateStruct;

    let weather = new Weather();
    weather.date = new Date(date.year, date.month, date.day);
    weather.temperature = this.weatherCreateForm.controls.temperature.value!;
    weather.description = this.weatherCreateForm.controls.description.value!;

    this.weatherService.add(weather).subscribe(
      () => {
        this.router.navigate(['/weather']);
      },
      (error) => {
        this.showInternalServerError = true;
      }
    );
  }
}
