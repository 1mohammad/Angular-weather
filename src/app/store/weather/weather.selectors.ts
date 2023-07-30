import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WeatherState } from './weather.reducer';

const selectWeatherState = createFeatureSelector<WeatherState>('weather');

export const selectWeatherData = createSelector(selectWeatherState, (state) => state.data);
export const selectWeatherLoading = createSelector(selectWeatherState, (state) => state.loading);
export const selectWeatherError = createSelector(selectWeatherState, (state) => state.error);