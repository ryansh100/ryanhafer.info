import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeIn', [
      state('inactive', style({
        opacity: '0'
      })),
      state('active',   style({
        opacity: '1'
      })),
      state('active2',   style({
        opacity: '1'
      })),
      state('active3',   style({
        opacity: '1'
      })),
      transition('inactive => active', animate('600ms ease-in'))
    ])
  ]
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  headingWord1 = 'inactive';
  headingWord2 = 'inactive';
  headingWord3 = 'inactive';

  ngOnInit() {
    setTimeout((function () {
      this.headingWord1 = 'active';
    }).bind(this), 100);
    setTimeout((function () {
      this.headingWord2 = 'active';
    }).bind(this), 700);
    setTimeout((function () {
      this.headingWord3 = 'active';
    }).bind(this), 1300);
  }
}
