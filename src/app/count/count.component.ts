import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit {

  @Input() valor: 5;

  @Output() onChange = new EventEmitter();

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
