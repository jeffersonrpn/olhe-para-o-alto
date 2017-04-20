import { Component, OnInit } from '@angular/core';
import {logWarnings} from "protractor/built/driverProviders";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  myOnChange(event) {
    console.log(event.newValue);
  }

  constructor() { }

  ngOnInit() {
  }
}
