import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectIsOnline } from '@store/online-status/online-status.selectors';
import { slideInOutAnimation } from '@animations/slide-in-out.animations';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [slideInOutAnimation],
})
export class HeaderComponent {
	isCheckedLang = false;
	constructor(
		private store: Store,
		private translateService: TranslateService
	) {}

	isOnline$ = this.store.pipe(select(selectIsOnline));

	onLanguageChange():void {
		this.translateService.use(this.isCheckedLang ? 'fa' : 'en')
	}
}
