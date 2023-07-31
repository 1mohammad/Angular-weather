import { Component } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { fetchWeather } from '@store/weather/weather.actions';
import { selectWeatherLoading } from '@store/weather/weather.selectors';
import { take } from 'rxjs';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent {
	cityForm!: UntypedFormGroup;
	isLoading$ = this.store.select(selectWeatherLoading);

	constructor(private store: Store, private fb: FormBuilder) {
		this.cityForm = this.fb.group({
			city: ['', Validators.required]
		});
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
