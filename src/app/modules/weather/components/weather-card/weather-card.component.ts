import { Component, Input } from '@angular/core';
import { WeatherData } from '@models/weather-data.model';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent {
	@Input() data!: WeatherData;

	mockD = {
		icon: '01d',
		city: 'Shiraz',
		humidity: 10,
		temperature: 20,
		weatherDescription: 'cold'
	}
}
