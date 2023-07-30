import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { WeatherState, selectWeatherData, selectWeatherLoading, selectWeatherError } from '../../store/weather.reducer';

@Component({
	selector: 'app-weather',
	templateUrl: './weather.component.html',
	styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent {
  weatherData$: Observable<any>;
  loading$: Observable<boolean>;
  error$: Observable<any>;

  constructor(private store: Store<WeatherState>) {
    this.weatherData$ = this.store.select(selectWeatherData);
    this.loading$ = this.store.select(selectWeatherLoading);
    this.error$ = this.store.select(selectWeatherError);
  }
}
