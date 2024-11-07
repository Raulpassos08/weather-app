import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: [],
})
export class WeatherHomeComponent implements OnInit {
  ngOnInit(): void {}
  constructor(private weatherService: WeatherService) {}
}
