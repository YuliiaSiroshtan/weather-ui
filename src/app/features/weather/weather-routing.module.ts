import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherCreatePageComponent } from './pages/weather-create-page/weather-create-page.component';
import { WeatherInfoPageComponent } from './pages/weather-info-page/weather-info-page.component';
import { WeatherComponent } from './weather.component';

const routes: Routes = [
  {
    path: '',
    component: WeatherComponent,
    children: [
      {
        path: 'create',
        component: WeatherCreatePageComponent,
      },
      {
        path: '',
        component: WeatherInfoPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherRoutingModule {}
