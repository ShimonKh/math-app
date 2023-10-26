import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-answer',
  templateUrl: './input-answer.component.html',
  styleUrls: ['./input-answer.component.css']
})
export class InputAnswerComponent implements OnInit {
  @Output() getInputValue: EventEmitter<any> = new EventEmitter();
  inputValue: string;


  constructor() {
  }

  ngOnInit() {
  }

  // getRandom(min: number, max: number) {
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }
  //
  // getRandoms(min, max) {
  //   let firstNumber = this.getRandom(min, max);
  //   let secondNumber = this.getRandom(min, max);
  //   firstNumber = firstNumber * Math.pow(10, this.getRandom(1, 3));
  //   secondNumber = secondNumber * Math.pow(10, this.getRandom(1, 3));
  //   this.sign = Math.random() >= 0.5;
  //
  //   if (firstNumber !== secondNumber) {
  //     this.firstNumber = firstNumber;
  //     this.secondNumber = secondNumber;
  //     this.currentAnswer = this.firstNumber * this.secondNumber;
  //     this.tasksLeft--;
  //   } else {
  //     this.getRandoms(min, max);
  //   }
  //
  //   this.showAgainButton = this.tasksLeft === 0;
  // }

  onEnter() {
    if (!isNaN(Number(this.inputValue))) {
      if (parseInt(this.inputValue, 10)) {
        this.getInputValue.emit(parseInt(this.inputValue, 10));
      }
      if (this.inputValue === '0') {
        this.getInputValue.emit(0);
      }
    }
    this.clearInput();
  }

  // startAgain() {
  //   this.getRandoms(this.min, this.max);
  //   this.rightAnswer = 0;
  //   this.wrongAnswer = 0;
  //   this.tasksLeft = this.totalTasks;
  // }
  clearInput() {
    this.inputValue = '';
  }

  valuechange(val: any) {
    // console.log(44444);
    // this.errorMessage = false;
  }
}
