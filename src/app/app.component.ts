import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Weather } from './models/weather.model';
import { FormControl, FormGroup } from '@angular/forms';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Weather';
  weathers: Weather[] = [{
    date: new Date(Date.now()),
    description: 'test'
  }];

  weatherForm = new FormGroup({
    date: new FormControl(''),
    description: new FormControl('')
  });

  constructor(private modalService: NgbModal) {
  }

  open(modal: any): void {
    this.modalService.open(modal);
  }

  saveWeather(){
    let weather = new Weather();
    weather.date = new Date(Date.parse(this.weatherForm.controls.date.value ?? ''));
    weather.description = this.weatherForm.controls.description.value;

    this.weathers.push(weather);
  }
}
