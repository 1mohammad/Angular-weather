import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { SearchComponent } from './search.component';
import { fetchWeather } from 'src/app/store/weather.actions';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let mockStore: MockStore;
  const initialState = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [
		ReactiveFormsModule
	  ],
      providers: [
        provideMockStore({ initialState }),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(Store) as MockStore;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch fetchWeather action on form submission', () => {
    const city = 'New York';
    component.cityForm.get('city')?.setValue(city);
    spyOn(mockStore, 'dispatch').and.callThrough();
    component.onFetchWeather();
    expect(mockStore.dispatch).toHaveBeenCalledWith(fetchWeather({ city }));
  });

  it('should not dispatch fetchWeather action on form submission if city is not provided', () => {
    spyOn(mockStore, 'dispatch').and.callThrough();
    component.onFetchWeather();
    expect(mockStore.dispatch).not.toHaveBeenCalled();
  });

  it('should update cityForm value when the input field is changed', () => {
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('input');
    inputElement.value = 'New York';
    inputElement.dispatchEvent(new Event('input'));

    expect(component.cityForm.get('city')?.value).toBe('New York');
  });

  it('should call onFetchWeather() method when the form is submitted', () => {
    spyOn(component, 'onFetchWeather');

    const formElement: HTMLFormElement = fixture.nativeElement.querySelector('form');
    formElement.dispatchEvent(new Event('submit'));
    fixture.detectChanges();

    expect(component.onFetchWeather).toHaveBeenCalled();
  });


});
