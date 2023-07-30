import { createAction, props } from '@ngrx/store';
import { WeatherData } from '@models/weather-data.model';

// Action to trigger weather data retrieval
export const fetchWeather = createAction('[Weather] Fetch Weather', props<{ city: string }>());

// Action dispatched when weather data is successfully fetched
export const fetchWeatherSuccess = createAction('[Weather] Fetch Weather Success', props<{ weatherData: WeatherData }>());

// Action dispatched when weather data fetch fails
export const fetchWeatherFailure = createAction('[Weather] Fetch Weather Failure', props<{ error: any }>());
