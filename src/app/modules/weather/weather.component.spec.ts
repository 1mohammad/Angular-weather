import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherComponent } from './weather.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;
  const initialState = {};
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherComponent],
	  providers: [
        provideMockStore({ initialState }),
      ],
    });
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
