import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-stop-watch',
  imports: [CommonModule],
  templateUrl: './stop-watch.html',
  styleUrl: './stop-watch.scss'
})
export class StopWatch {

  elapsedTime: number = 0;
  isRunning: boolean = false;
  intervalRef: any;

  startStop() {
    this.isRunning ? this.stop() : this.start();
    /* if (this.isRunning) {
      this.stop();
    } else {
      this.start();
    } */
  }


  private start() {
    this.isRunning = true;
    this.intervalRef = setInterval(() => {
      this.elapsedTime += 0.1; // Increment by 1 second
    }, 100)
    console.log("Stopwatch started");
  }

  private stop() {
    this.isRunning = false;
    clearInterval(this.intervalRef);
    console.log("Stopwatch stopped");
  }

  reset() {
    this.isRunning = false;
    clearInterval(this.intervalRef);
    this.elapsedTime = 0;
    console.log("Stopwatch reset");
  }
}
