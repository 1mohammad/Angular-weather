import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { WeatherData } from '@models/weather-data.model';
import { WeatherCacheService } from './weather-cache.service';

@Injectable({
	providedIn: 'root',
})
export class WeatherService {
	private apiKey = '99d1d30f08cdd1b5ccf8e1915152be21';
	private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

	constructor(private http: HttpClient, private weatherCacheService: WeatherCacheService) { }

	getWeatherData(city: string): Observable<WeatherData> {
		// cachedData is cached into localStorage
		const cachedData = this.weatherCacheService.getWeatherData(city);
		if (cachedData) {
			return of(cachedData.data);
		} else {
			const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`;
			return this.http.get<any>(url).pipe(
				map((response) => {
					const watcherData = this.extractWeatherData(response);
					this.weatherCacheService.saveToLocalStorage(city, watcherData);
					return watcherData;
				}),
				catchError((error) => {
					console.error('Weather API Error:', error);
					throw error;
				})
			);
		}
	}

	private extractWeatherData(response: any): WeatherData {
		return {
			city: response.name,
			temperature: Math.round(response.main.temp),
			weatherDescription: response.weather[0].description,
			icon: response.weather[0].icon,
			humidity: response.main.humidity,
			feelsLike: Math.round(response.main.feels_like)
		};
	}
}
