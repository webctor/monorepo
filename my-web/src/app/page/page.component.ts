import { Component, OnInit } from '@angular/core';
import { Icon } from '../valueobjects/icon';
import { ICONS } from '../valueobjects/mock-icons';
import { trigger, query, stagger, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'my-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
  animations: [
    trigger('enterAnimation', [
      transition('* => fadeIn', [
        query(':enter', style({ opacity: 0 })),
        // starts to animate things with a stagger in between
        query(':enter', stagger('100ms', [
          animate('1s', style({ opacity: 1 }))
        ]))
      ]),
      transition('* => fadeOut', [
        animate(1000, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class PageComponent implements OnInit {


  ICONS: Icon[] = ICONS;

  page = {
    title: 'hello.',
    name: 'Hector',
    position: 'Software Engineer',
  }
  constructor() { }

  ngOnInit() {
  }

  clickedIcon: Icon;
  overIcon: Icon;

  onClick(icon: Icon): void {
    this.clickedIcon = icon;
    if(icon.name !== 'e-mail') {
      window.open(icon.link, "_blank");
    } else {
      window.open(icon.link, "_self");
    }
  }

  onEnter(icon: Icon) {
    this.overIcon = icon;
  }

  onLeave(icon: Icon){
    this.overIcon = null;
  }
}
