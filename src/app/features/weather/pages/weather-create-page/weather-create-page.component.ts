import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Weather } from '../../models/weather.model';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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

  constructor(
    private weatherService: WeatherService,
    private router: Router,
    private toaster: ToastrService
  ) {}

  addWeather() {
    if (this.weatherCreateForm.invalid) {
      return;
    }

    let date = this.weatherCreateForm.controls.date.value! as NgbDateStruct;

    let weather = new Weather();
    weather.date = new Date(date.year, date.month, date.day);
    weather.temperature = this.weatherCreateForm.controls.temperature.value!;
    weather.description = this.weatherCreateForm.controls.description.value!;

    this.weatherService.add(weather).subscribe({
      complete: () => {
        this.toaster.success('Weather created successfully', 'Success');
        this.router.navigate(['/weather']);
      },
      error: (err) => {
        this.toaster.error(err, 'Error');
      },
      next: () => {},
    });
  }
}
