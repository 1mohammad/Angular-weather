import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { onlineStatusReducer } from './store/online-status/online-status.reducer';
import { weatherReducer } from './store/weather/weather.reducer';
import { WeatherEffects } from './store/weather/weather.effects';

export function createTranslateLoader(http: HttpClient) {
	return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		SearchComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		AppRoutingModule,
		HttpClientModule,
		ReactiveFormsModule,
		TranslateModule.forRoot(
			{
				loader: {
					provide: TranslateLoader,
					useFactory: (createTranslateLoader),
					deps: [HttpClient]
				},
				isolate: false
			}
		),
		StoreModule.forRoot({ weather: weatherReducer, onlineStatus: onlineStatusReducer }),
		EffectsModule.forRoot([WeatherEffects]),
		
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
