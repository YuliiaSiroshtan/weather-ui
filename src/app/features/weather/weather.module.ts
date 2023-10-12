import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeatherComponent } from './weather.component';
import { WeatherInfoPageComponent } from './pages/weather-info-page/weather-info-page.component';
import { WeatherCreatePageComponent } from './pages/weather-create-page/weather-create-page.component';
import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';

@NgModule({
  declarations: [
    WeatherComponent,
    WeatherInfoPageComponent,
    WeatherCreatePageComponent,
    WeatherCardComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    WeatherRoutingModule,
    FormsModule,
  ],
  exports: [WeatherComponent],
})
export class WeatherModule {}
