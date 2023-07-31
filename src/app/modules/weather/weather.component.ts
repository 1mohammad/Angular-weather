import { Component } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectWeatherData, selectWeatherLoading, selectWeatherError } from '@store/weather/weather.selectors';
import { WeatherData } from '@models/weather-data.model';
import { fadeInOutAnimation } from '@animations/fade-in-out.animations';

@Component({
	selector: 'app-weather',
	templateUrl: './weather.component.html',
	styleUrls: ['./weather.component.scss'],
	animations: [fadeInOutAnimation]
})
export class WeatherComponent {
  weatherData$: Observable<WeatherData | null>;
  error$: Observable<any>;

  constructor(private store: Store) {
    this.weatherData$ = this.store.select(selectWeatherData).pipe(delay(150));
    this.error$ = this.store.select(selectWeatherError);
  }
}
