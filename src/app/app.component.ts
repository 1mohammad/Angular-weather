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
		this.translate.setDefaultLang('en');
		this.translate.use('en');
	}

  ngOnInit() {
    window.addEventListener('online', _ => {
		this.updateOnlineStatus();
	});
    window.addEventListener('offline', _ => {
		this.updateOnlineStatus();
	});
    this.updateOnlineStatus();
	this.translate.onLangChange.subscribe({
		next: (selectedLang:{lang:string,translations: any}) => {
			this.updateDirection(selectedLang.lang);
		}
	})
  }

  updateOnlineStatus(): void {
    const isOnline = navigator.onLine;
    this.store.dispatch(setOnlineStatus(isOnline));
  }

  updateDirection(lang: string): void {
    const isRtl = lang === 'fa';
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
  }

}
