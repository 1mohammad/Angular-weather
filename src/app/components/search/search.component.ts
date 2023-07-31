import { Component } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { fadeInOutAnimation } from '@animations/fade-in-out.animations';
import { WeatherData } from '@models/weather-data.model';
import { Store } from '@ngrx/store';
import { fetchWeather } from '@store/weather/weather.actions';
import { selectWeatherData, selectWeatherError, selectWeatherLoading } from '@store/weather/weather.selectors';
import { Observable, take } from 'rxjs';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss'],
	animations: [fadeInOutAnimation]
})
export class SearchComponent {
	cityForm!: UntypedFormGroup;
	isLoading$: Observable<boolean>;
	weatherData$: Observable<WeatherData | null>;
	error$: Observable<any>;

	constructor(private store: Store, private fb: FormBuilder) {
		this.cityForm = this.fb.group({
			city: ['', Validators.required]
		});
		this.weatherData$ = this.store.select(selectWeatherData);
		this.error$ = this.store.select(selectWeatherError);
		this.isLoading$ = this.store.select(selectWeatherLoading);
	}

	onFetchWeather(): void {
		if (!this.cityForm.valid) {
			return
		}
		this.isLoading$.pipe(take(1)).subscribe((isLoading) => {
			if (!isLoading) {
				const city = this.cityForm.get('city')?.value;
				this.store.dispatch(fetchWeather({ city: city }));
			}
		});
	}
}
