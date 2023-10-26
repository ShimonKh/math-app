import {Component, OnInit} from '@angular/core';
import {SharedServiceService} from '../../shared/services/shared-service.service';

@Component({
  selector: 'app-multi-nulls',
  templateUrl: './multi-nulls.component.html',
  styleUrls: ['./multi-nulls.component.css']
})
export class MultiNullsComponent implements OnInit {
  rightAnswer: number = 0;
  title = 'app';
  firstNumber: number;
  secondNumber: number;
  sign: boolean;
  currentAnswer: number;
  inputValue: string;
  min = 2;
  max = 9;
  errorMessage: boolean;
  wrongAnswer: number = 0;
  totalTasks: number = 5;
  tasksLeft: number = this.totalTasks;
  showAgainButton: boolean;

  constructor(
    private _sharedService: SharedServiceService,
  ) {
  }

  ngOnInit() {
  }

  // getRandom(min: number, max: number) {
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }

  getRandoms(min: number, max: number) {
    let firstNumber = this._sharedService.getRandom(min, max);
    let secondNumber = this._sharedService.getRandom(min, max);
    firstNumber = firstNumber * Math.pow(10, this._sharedService.getRandom(1, 3));
    secondNumber = secondNumber * Math.pow(10, this._sharedService.getRandom(1, 3));
    this.sign = Math.random() >= 0.5;

    if (firstNumber !== secondNumber) {
      this.firstNumber = firstNumber;
      this.secondNumber = secondNumber;
      this.currentAnswer = this.firstNumber * this.secondNumber;
      this.tasksLeft--;
    } else {
      this.getRandoms(min, max);
    }

    this.showAgainButton = this.tasksLeft === 0;
  }

  startAgain() {
    this.getRandoms(this.min, this.max);
    this.rightAnswer = 0;
    this.wrongAnswer = 0;
    this.tasksLeft = this.totalTasks;
  }

  valuechange() {
    console.log(44444);
    this.errorMessage = false;

  }

}
