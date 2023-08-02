import { trigger, state, style, animate, transition } from '@angular/animations';

export const fadeInAnimation = trigger('fadeIn', [
  state('void', style({
    opacity: 0,
    transform: 'translateY(5px)'
  })),
  transition(':enter', [
    animate('150ms', style({
      opacity: 1,
      transform: 'translateY(0)'
    }))
  ]),
]);
