import { style, transition, trigger, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectIsOnline } from '@store/online-status/online-status.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('300ms ease-out', style({ transform: 'translateY(0%)' })),
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateY(-100%)' })),
      ]),
    ]),
  ],
})
export class HeaderComponent {

	constructor(private store: Store) {}

	isOnline$ = this.store.pipe(select(selectIsOnline));

}
