import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectWeatherData, selectWeatherLoading, selectWeatherError } from '@store/weather/weather.selectors';
import { WeatherData } from '@models/weather-data.model';

@Component({
	selector: 'app-weather',
	templateUrl: './weather.component.html',
	styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent {
  weatherData$: Observable<WeatherData | null>;
  loading$: Observable<boolean>;
  error$: Observable<any>;

  constructor(private store: Store) {
    this.weatherData$ = this.store.select(selectWeatherData);
    this.loading$ = this.store.select(selectWeatherLoading);
    this.error$ = this.store.select(selectWeatherError);
  }
}
