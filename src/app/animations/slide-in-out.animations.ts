import { trigger,state,style, animate, transition } from '@angular/animations';

export const slideInOutAnimation = trigger('slideInOut', [
	state('void', style({
		transform: 'translateY(-100%)' // Move the element 5 pixels down initially
	})),
	transition(':enter', [
		animate('150ms', style({
			transform: 'translateY(0)' // Move the element back to its original position (0 pixels)
		}))
	]),
	transition(':leave', [
		animate('150ms', style({
			transform: 'translateY(-100%)' // Move the element 5 pixels down again when leaving
		}))
	])
]);
