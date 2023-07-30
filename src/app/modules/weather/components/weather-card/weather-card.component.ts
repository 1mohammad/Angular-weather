import { Component, Input } from '@angular/core';
import { WeatherData } from '@models/weather-data.model';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent {
	@Input() data!: WeatherData;
}
