import { Component, OnInit } from '@angular/core';
import { Weather } from '../../models/weather.model';
import { WeatherService } from '../../services/weather.service';
import { map } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-weather-info-page',
  templateUrl: './weather-info-page.component.html',
  styleUrls: ['./weather-info-page.component.scss'],
})
export class WeatherInfoPageComponent implements OnInit {
  weathers: Weather[] = [];

  constructor(
    private weatherService: WeatherService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
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
        .subscribe({
          complete: () => {
            this.spinner.hide();
          },
        });
    }, 1000);
  }
}
