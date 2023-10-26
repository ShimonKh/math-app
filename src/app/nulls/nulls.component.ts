// import {Component, OnInit} from '@angular/core';
//
// @Component({
//   selector: 'app-nulls',
//   templateUrl: './nulls.component.html',
//   styleUrls: ['./nulls.component.css']
// })
// export class NullsComponent implements OnInit {
//
//   rightAnswer: number = 0;
//   title = 'app';
//   firstNumber: number;
//   secondNumber: number;
//   sign: boolean;
//   currentAnswer: number;
//   inputValue: string;
//   min = 2;
//   max = 9;
//   errorMessage: boolean;
//
//   wrongAnswer: number = 0;
//   totalTasks: number = 5;
//   tasksLeft: number = this.totalTasks;
//   showAgainButton: boolean;
//
//   constructor() {
//   }
//
//   ngOnInit(): void {
//     // this.getRandoms(this.min, this.max);
//     this.showAgainButton = true;
//   }
//
//   getRandom(min: number, max: number) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
//
//   getRandoms(min, max) {
//     let firstNumber = this.getRandom(min, max);
//     let secondNumber = this.getRandom(min, max);
//     firstNumber = firstNumber * Math.pow(10, this.getRandom(1, 3));
//     secondNumber = secondNumber * Math.pow(10, this.getRandom(1, 3));
//     this.sign = Math.random() >= 0.5;
//
//     if (firstNumber !== secondNumber) {
//       this.firstNumber = firstNumber;
//       this.secondNumber = secondNumber;
//       this.currentAnswer = this.firstNumber * this.secondNumber;
//       this.tasksLeft--;
//     } else {
//       this.getRandoms(min, max);
//     }
//
//     this.showAgainButton = this.tasksLeft === 0;
//   }
//
//
//   onEnter() {
//     if (parseInt(this.inputValue)) {
//
//       // console.log(33333, this.inputValue, this.currentAnswer);
//       if (this.sign) {
//         if (parseInt(this.inputValue) === this.currentAnswer) {
//           this.inputValue = '';
//           this.getRandoms(this.min, this.max);
//           this.rightAnswer++;
//         } else {
//           this.wrongAnswer++;
//           this.errorMessage = true;
//         }
//       } else {
//         if ((this.currentAnswer / this.firstNumber) === parseInt(this.inputValue)) {
//           this.inputValue = '';
//           this.getRandoms(this.min, this.max);
//           this.rightAnswer++;
//         } else {
//           this.wrongAnswer++;
//           this.errorMessage = true;
//         }
//       }
//
//       // }
//
//       // console.log(22222, value);
//       // this.box
//
//     } else {
//       this.inputValue = '';
//     }
//
//   }
//
//   startAgain() {
//     this.getRandoms(this.min, this.max);
//     this.rightAnswer = 0;
//     this.wrongAnswer = 0;
//     this.tasksLeft = this.totalTasks;
//   }
//
//   valuechange() {
//     console.log(44444);
//     this.errorMessage = false;
//
//   }
//
// }
