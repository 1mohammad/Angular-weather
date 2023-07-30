import { Component } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { fetchWeather } from '@store/weather/weather.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
	cityForm!: UntypedFormGroup;

	constructor(private store: Store, private fb: FormBuilder) {
		this.cityForm = this.fb.group({
			city: ['',Validators.required]
		});
	}
  
	onFetchWeather(): void {
		const city = this.cityForm.get('city')?.value;
		if (city) {
			this.store.dispatch(fetchWeather({ city: city }));
		}
	}
}
