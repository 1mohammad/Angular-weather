import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { WeatherService } from '../services/weather.service'; // Replace this with your weather service

import * as WeatherActions from './weather.actions';

@Injectable()
export class WeatherEffects {
  constructor(private actions$: Actions, private weatherService: WeatherService) {}

  fetchWeather$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WeatherActions.fetchWeather),
      mergeMap((action) => 
        this.weatherService.getWeatherData(action.city).pipe(
          map((weatherData) => WeatherActions.fetchWeatherSuccess({ weatherData })),
          catchError((error) => of(WeatherActions.fetchWeatherFailure({ error })))
        )
      )
    )
  );
}