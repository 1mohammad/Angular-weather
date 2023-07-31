import { trigger, state, style, animate, transition } from '@angular/animations';

export const fadeInOutAnimation = trigger('fadeInOut', [
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
  transition(':leave', [
    animate('150ms', style({
      opacity: 0,
      transform: 'translateY(5px)'
    }))
  ])
]);
