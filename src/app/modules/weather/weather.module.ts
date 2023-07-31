import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';
import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TranslateModule } from '@ngx-translate/core';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
	WeatherComponent,
 WeatherCardComponent,
 ErrorComponent
  ],
  imports: [
    CommonModule,
	WeatherRoutingModule,
	AngularSvgIconModule,
	TranslateModule
  ],
})
export class WeatherModule { }
