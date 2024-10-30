import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = 'de14dd081d5edaa5d8c7b092f5dd6bca';

  constructor() {}
}
