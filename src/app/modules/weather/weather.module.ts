import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';
import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [
	WeatherComponent,
 WeatherCardComponent
  ],
  imports: [
    CommonModule,
	WeatherRoutingModule,
	AngularSvgIconModule
  ],
})
export class WeatherModule { }
