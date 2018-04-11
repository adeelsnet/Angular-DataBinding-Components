import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() allNumbersFired = new EventEmitter<number>();
  @Output() resetAll = new EventEmitter<{}>();
  onOff;
  intervals;
  intervalValue = 0;
  lock = true;

  constructor() {}

  ngOnInit() {
  }

  onGameStart() {
    this.lock = false;
    this.intervals = setInterval(() => {
       this.allNumbersFired.emit(this.intervalValue + 1);
          this.intervalValue++;
      }, 1000);
    }

  onGamePause() {
    this.lock = true;
    clearInterval(this.intervals);

  }

  resetAllButton() {
    this.lock = true;
    this.intervalValue = 0;
    this.resetAll.emit();
  }

}
