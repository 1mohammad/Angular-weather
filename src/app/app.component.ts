import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { setOnlineStatus } from './store/online-status/online-status.actions';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather';

  isOnline$ = this.store.select('onlineStatus', 'isOnline');

  constructor(
	private store: Store<{ onlineStatus: { isOnline: boolean } }>,
	private translate: TranslateService
	) {
		translate.setDefaultLang('en');
		translate.use('en');
	}

  ngOnInit() {
    window.addEventListener('online', _ => {
		this.updateOnlineStatus();
	});
    window.addEventListener('offline', _ => {
		this.updateOnlineStatus();
	});
    this.updateOnlineStatus();
  }

  updateOnlineStatus(): void {
    const isOnline = navigator.onLine;
    this.store.dispatch(setOnlineStatus(isOnline));
  }
}
