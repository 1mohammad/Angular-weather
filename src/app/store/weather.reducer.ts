import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { WeatherData } from '../models/weather-data.model';
import * as WeatherActions from './weather.actions';

const selectWeatherState = createFeatureSelector<WeatherState>('weather');

export const selectWeatherData = createSelector(selectWeatherState, (state) => state.data);
export const selectWeatherLoading = createSelector(selectWeatherState, (state) => state.loading);
export const selectWeatherError = createSelector(selectWeatherState, (state) => state.error);

export interface WeatherState {
  data: WeatherData | null;
  loading: boolean;
  error: any;
}

export const initialState: WeatherState = {
  data: null,
  loading: false,
  error: null,
};

export const weatherReducer = createReducer(
  initialState,
  on(WeatherActions.fetchWeather, (state) => ({ ...state, loading: true, error: null })),
  on(WeatherActions.fetchWeatherSuccess, (state, { weatherData }) => ({ ...state, data: weatherData, loading: false })),
  on(WeatherActions.fetchWeatherFailure, (state, { error }) => ({ ...state, error, loading: false }))
);
