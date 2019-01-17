import { Component, OnInit } from '@angular/core';
import { Icon } from '../valueobjects/icon';

@Component({
  selector: 'my-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  ICONS: Icon[] = [
    {
      source: './assets/icons/github.png',
      name: 'GitHub'
    }, {
      source: './assets/icons/linkedin.png',
      name: 'LinkedIn'
    }, {
      source: './assets/icons/mail.png',
      name: 'e-mail'
    }
  ]

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
    console.log('', icon);
  }

  onEnter(icon: Icon) {
    this.overIcon = icon;
  }

  onLeave(icon: Icon){
    this.overIcon = null;
  }
}
