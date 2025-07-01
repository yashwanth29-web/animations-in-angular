import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  trigger,
  style,
  animate,
  transition,
  state,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fade', [
      transition(':enter', [style({ opacity: 0 }), animate('500ms ease-in', style({ opacity: 1 }))]),
      transition(':leave', [animate('500ms ease-out', style({ opacity: 0 }))])
    ]),
    trigger('slidex', [
      transition(':enter', [style({ transform: 'translateX(-100%)' }), animate('500ms ease-out', style({ transform: 'translateX(0)' }))]),
      transition(':leave', [animate('500ms ease-in', style({ transform: 'translateX(-100%)' }))])
    ]),
    trigger('slideY', [
      transition(':enter', [style({ transform: 'translateY(-100%)' }), animate('500ms ease-out', style({ transform: 'translateY(0)' }))]),
      transition(':leave', [animate('500ms ease-in', style({ transform: 'translateY(-100%)' }))])
    ]),
    trigger('collapse', [
      state('open', style({ height: '*', opacity: 1 })),
      state('closed', style({ height: '0px', opacity: 0 })),
      transition('open <=> closed', animate('400ms ease-in-out'))
    ]),
    trigger('zoom', [
      transition(':enter', [style({ transform: 'scale(0.5)' }), animate('300ms ease-out', style({ transform: 'scale(1)' }))])
    ]),
    trigger('rotate', [
      transition(':enter', [style({ transform: 'rotate(0deg)' }), animate('500ms ease-out', style({ transform: 'rotate(360deg)' }))])
    ]),
    trigger('shake', [
      transition('* => *', [
        animate('500ms', keyframes([
          style({ transform: 'translateX(0)' }),
          style({ transform: 'translateX(-10px)' }),
          style({ transform: 'translateX(10px)' }),
          style({ transform: 'translateX(-10px)' }),
          style({ transform: 'translateX(10px)' }),
          style({ transform: 'translateX(0)' })
        ]))
      ])
    ]),
    trigger('flipY', [
      transition(':enter', [style({ transform: 'rotateY(180deg)' }), animate('500ms ease-out', style({ transform: 'rotateY(0)' }))])
    ]),
    trigger('skew', [
      transition(':enter', [style({ transform: 'skewX(20deg)' }), animate('400ms ease-out', style({ transform: 'skewX(0)' }))])
    ]),
    trigger('bounce', [
      transition(':enter', [
        animate('600ms', keyframes([
          style({ transform: 'translateY(0)' }),
          style({ transform: 'translateY(-30px)' }),
          style({ transform: 'translateY(0)' }),
          style({ transform: 'translateY(-15px)' }),
          style({ transform: 'translateY(0)' })
        ]))
      ])
    ])
  ]
})
export class AppComponent {
  collapseState = 'closed';
  shakeTrigger = false;

  show = {
    fade: false,
    slidex: false,
    slideY: false,
    zoom: false,
    rotate: false,
    flipY: false,
    skew: false,
    bounce: false,
  };

  toggle(type: keyof typeof this.show) {
    this.show[type] = false;
    setTimeout(() => {
      this.show[type] = true;
    }, 20);
  }

  toggleCollapse() {
    this.collapseState = this.collapseState === 'open' ? 'closed' : 'open';
  }

  toggleShake() {
    this.shakeTrigger = !this.shakeTrigger;
  }
}
