import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit {

  @Input() valor: number = 5;

  @Output('outEvent') onChange = new EventEmitter();

  decrement() {
    this.valor--;
    this.onChange.emit({newValue: this.valor});
  }

  increment() {
    this.valor++;
    this.onChange.emit({newValue: this.valor});
  }

  constructor() { }

  ngOnInit() {
  }

}
