import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = 'de14dd081d5edaa5d8c7b092f5dd6bca';

  constructor(private http: HttpClient) {}

  getWeatherDatas(cityName: string): Observable<any>{
    return this.http.get('', {})
  }
}