import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  templateUrl: './counter.html',
  styleUrl: './counter.scss'
})
export class Counter {

  counter: number = 7;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  setZero() {
    this.counter = 0;
  }
  
  getCounterStatus(): string {
    if (this.counter > 0) {
      return 'positive';
    } else if (this.counter === 0) {
      return 'neutral';
    } else {
      return 'negative';
    }
  }

}
