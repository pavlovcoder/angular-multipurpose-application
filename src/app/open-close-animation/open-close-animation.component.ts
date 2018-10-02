import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-open-close-animation',
  templateUrl: './open-close-animation.component.html',
  styleUrls: ['./open-close-animation.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('* => closed', [
        animate('1s')
      ]),
      transition('* => open', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class OpenCloseAnimationComponent implements OnInit {
  public isOpen = true;

  constructor() { }

  ngOnInit() {
  }

  public toggleStatus(): void {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  }

}

// If the Angular Live Server isn't working, please using the command below for running on the watching mode:
// ng serve --poll=1000 --port 3000 --open
