import {
  trigger,
  state,
  animate,
  query,
  group,
  transition,
  style,
  stagger,
  animateChild,
} from '@angular/animations';

export const slideUp = trigger('slideUp', [
  transition('* => *', [
    style({ transform: 'translateY(100%)', opacity: 0 }),
    animate(1500, style({ transform: 'translateY(-5%)', opacity: 1 })),
  ]),
]);

export const slider = trigger('routeAnimations', [
  transition('* => isRight', slideTo('right')),
  transition('isRight => *', slideTo('left')),
  transition('isBid => *', slideTo('left')),
])

export const fadeIn = trigger('fadeIn', [
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate('2.5s ease-out', style({
      opacity: 1
    }))
  ])
])

export const fadeIn_1 = trigger('fadeIn_1', [
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate('3s ease-out', style({
      opacity: 1
    }))
  ])
])
export const fadeIn_2 = trigger('fadeIn_2', [
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate('5s ease-out', style({
      opacity: 1
    }))
  ])
])

export const slideLeft = trigger('slideLeft', [
  transition('* => *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
    group([
      query(':enter', [style({ transform: 'translateX(100%)' }), animate('1s ease-out', style({ transform: 'translateX(0%)' }))], {
        optional: true,
      }),
      query(':leave', [style({ transform: 'translateX(0%)' }), animate('1s ease-out', style({ transform: 'translateX(-100%)' }))], {
        optional: true,
      }),
    ]),
  ])
])

export const slideRight = trigger('slideRight', [
  transition('* => *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
    group([
      query(':enter', [style({ transform: 'translateX(-100%)' }), animate('1s ease-out', style({ transform: 'translateX(0%)' }))], {
        optional: true,
      }),
      query(':leave', [style({ transform: 'translateX(0%)' }), animate('1s ease-out', style({ transform: 'translateX(100%)' }))], {
        optional: true,
      }),
    ]),
  ])
])

function slideTo(direction:any) {
  const optional = { optional: true};
  return [
    query(':enter, :leave', [
      style({ position: 'fixed', [direction]:0, width: '100%' })
    ], optional),
    query(':enter', [
      style({ [direction]:'-100%'})
    ], optional),
    query(':enter', animateChild()),
    group([
      query(':enter', [
        animate('1s ease-out', style({ [direction]: '0%' }))
      ], optional),
      query(':leave', [
        animate('1s ease-out', style({ [direction]: '100%' }))
      ], optional),
    ]),
  ];
}