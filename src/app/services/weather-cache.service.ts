import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectIsOnline } from '@store/online-status/online-status.selectors';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherCacheService {
  isOnline$ = this.store.select(selectIsOnline);
  isOnline = true;
  subscriptions: Subscription = new Subscription();
  private readonly cacheDurationMs = 10 * 1000; // cache duration in milliseconds

  constructor(private store: Store) {
	this.subscriptions = this.isOnline$.subscribe({
		next: (value) => {
			this.isOnline = value;
		}
	})
  }

  getWeatherData(city: string): any | null {
	  const cachedData = this.getCachedWeatherData(city);
	if (!this.isOnline && cachedData) {
		return cachedData;
	}
    if (cachedData && this.isCacheValid(cachedData.timestamp)) {
      return cachedData;
    } else {
      return null;
    }
  }

  saveWeatherData(city: string, data: any): void {
    const cacheData = {
      timestamp: new Date().getTime(),
      data: data
    };
    localStorage.setItem(this.getCacheKey(city), JSON.stringify(cacheData));
  }

   getCachedWeatherData(city: string): { timestamp: number; data: any } | null {
    const cachedData = localStorage.getItem(this.getCacheKey(city));
    return cachedData ? JSON.parse(cachedData) : null;
  }

   isCacheValid(timestamp: number): boolean {
    const currentTime = new Date().getTime();
    return currentTime - timestamp < this.cacheDurationMs;
  }

   getCacheKey(city: string): string {
	const formattedCity = city.toLowerCase().replace(/\s+/g, '_');
    return `weather_${formattedCity}`;
  }
  
  saveToLocalStorage(city: string, data: any): void {
    const cacheData = {
      timestamp: new Date().getTime(),
      data: data
    };
    localStorage.setItem(this.getCacheKey(city), JSON.stringify(cacheData));
  }

  ngOnDestroy(): void {
	this.subscriptions.unsubscribe();
  }
}
