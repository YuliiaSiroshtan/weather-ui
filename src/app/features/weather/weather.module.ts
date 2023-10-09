import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { WeatherComponent } from './weather.component';
import { WeatherInfoPageComponent } from './pages/weather-info-page/weather-info-page.component';
import { WeatherCreatePageComponent } from './pages/weather-create-page/weather-create-page.component';
import { WeatherRoutingModule } from './weather-routing.module';

@NgModule({
  declarations: [
    WeatherComponent,
    WeatherInfoPageComponent,
    WeatherCreatePageComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, NgbModule, WeatherRoutingModule],
  exports: [WeatherComponent],
})
export class WeatherModule {}
