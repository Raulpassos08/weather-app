import { Component, OnInit } from '@angular/core';
import { WeatherDatas } from 'src/app/models/interfaces/weather.interface';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: [],
})
export class WeatherHomeComponent implements OnInit {
  initialCityName = 'São Paulo';
  weatherDatas!: WeatherDatas;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWheatherDatas(this.initialCityName);
  }

  getWheatherDatas(cityName: string): void {
    this.weatherService.getWeatherDatas(cityName).subscribe({
      next: (response) => {
        response && (this.weatherDatas = response);
        console.log(this.weatherDatas);
      },
      error: (error) => console.log(error),
    });
  }
}
