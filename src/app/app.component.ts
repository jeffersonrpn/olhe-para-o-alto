import { Component, OnInit, Input } from '@angular/core';
import {logWarnings} from 'protractor/built/driverProviders';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  @Input() value: 0;

  myOnChange(event) {
    console.log(event.newValue);
    this.value = event.newValue;
  }

  constructor() { }

  ngOnInit() {
  }
}
