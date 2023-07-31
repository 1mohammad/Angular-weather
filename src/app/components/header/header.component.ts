import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectIsOnline } from '@store/online-status/online-status.selectors';
import { slideInOutAnimation } from '@animations/slide-in-out.animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [slideInOutAnimation],
})
export class HeaderComponent {

	constructor(private store: Store) {}

	isOnline$ = this.store.pipe(select(selectIsOnline));

}
