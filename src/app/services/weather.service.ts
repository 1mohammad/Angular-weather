import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { WeatherData } from '../models/weather-data.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = '99d1d30f08cdd1b5ccf8e1915152be21'; // Replace with your OpenWeatherMap API key
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeatherData(city: string): Observable<WeatherData> {
    const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`;
    return this.http.get<any>(url).pipe(
      map((response) => this.extractWeatherData(response)),
      catchError((error) => {
        console.error('Weather API Error:', error);
        throw error;
      })
    );
  }

  private extractWeatherData(response: any): WeatherData {
    return {
      city: response.name,
      temperature: response.main.temp,
      weatherDescription: response.weather[0].description,
    };
  }
}
