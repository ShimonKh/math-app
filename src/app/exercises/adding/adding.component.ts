import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {InputAnswerComponent} from '../../shared/components/input-answer/input-answer.component';
import {SharedServiceService} from '../../shared/services/shared-service.service';
import {MathInterfacesAnswerStatistic, MathInterfacesLevels} from '../../shared/models/mathInterfaces';
import {Router} from '@angular/router';

@Component({
  selector: 'app-adding',
  templateUrl: './adding.component.html',
  styleUrls: ['./adding.component.css']
})
export class AddingComponent implements OnInit {
  difficulty: MathInterfacesLevels;
  tasksLeft: number;
  firstNumber: number;
  sign: boolean;
  secondNumber: number;
  rightAnswer: number;
  currentAnswer: any;
  showError: boolean;
  @ViewChild(InputAnswerComponent) inputChild: InputAnswerComponent;
  startTimeStamp: number;
  endTimeStamp: number;
  startTimeStampCurrentQuestion: number;
  endTimeStampCurrentQuestion: number;
  statistic: { time: any, tasks: MathInterfacesAnswerStatistic[] };
  maxFirstNumber: number;
  minFirstNumber: number;
  maxSecondNumber: number;
  minSecondNumber: number;
  currentQuestionToString: string;

  constructor(private _sharedService: SharedServiceService, private router: Router) {
  }

  ngOnInit() {
    this.tasksLeft = this._sharedService.getNumberOfTasks();
    this.difficulty = this._sharedService.getDifficulty();
    console.log(777777, this.difficulty);
    //todo save tasksLeft  and difficulty in local storage
    if(!this.tasksLeft || !this.difficulty){
      this.router.navigate(['/home']);
    }
    else{
      this.setMinMaxValue();
      this.getRandomTask();
      this.statistic = {time: {}, tasks: []};
      this.startTimeStamp = this.getTimeStamp();
    }
  }

  getRandomTask() {
    const tempFirstNumber = this._sharedService.getRandom(this.minFirstNumber, this.maxFirstNumber);
    const tempSecondNumber = this._sharedService.getRandom(this.minSecondNumber, this.maxSecondNumber);
    this.sign = this._sharedService.getRndBoolean();
    if (!this.sign) {
      if (tempFirstNumber >= tempSecondNumber) {
        this.firstNumber = tempFirstNumber;
        this.secondNumber = tempSecondNumber;
      } else {
        this.firstNumber = tempSecondNumber;
        this.secondNumber = tempFirstNumber;
      }
    } else {
      this.firstNumber = tempFirstNumber;
      this.secondNumber = tempSecondNumber;
    }
    if (this.sign) {
      this.rightAnswer = this.firstNumber + this.secondNumber;
      this.currentQuestionToString = this.firstNumber + ' + ' + this.secondNumber + ' = ' + this.rightAnswer;
    } else {
      this.rightAnswer = this.firstNumber - this.secondNumber;
      this.currentQuestionToString = this.firstNumber + ' - ' + this.secondNumber + ' = ' + this.rightAnswer;
    }
    // this.rightAnswer = this.sign ? (this.firstNumber + this.secondNumber) : (this.firstNumber - this.secondNumber);
    this.startTimeStampCurrentQuestion = this.getTimeStamp();
  }

  checkAnswer(answer: number) {
    this.showError = false;
    if (+this.currentAnswer === this.rightAnswer) {
      this.endTimeStampCurrentQuestion = this.getTimeStamp();
      this.tasksLeft--;
      this.fillStatisticsObject();
      if (this.tasksLeft === 0) {
        this.endTimeStamp = this.getTimeStamp();
        this.statistic['time'] = this._sharedService.getSpentTime(this.startTimeStamp, this.endTimeStamp);
        this._sharedService.setStatisics(this.statistic);
      } else {
        this.getRandomTask();
        console.log('+++');
        this.inputChild.clearInput();
      }
      this._sharedService.emitCurrentAnswer(true);
      // todo process right answer
    } else {
      this.showError = true;
      this._sharedService.emitCurrentAnswer(false);


    }
  }

  fillStatisticsObject() {
    this.statistic['tasks'].push(
      {
        'questionAnswer': this.currentQuestionToString,
        'spentTime': this._sharedService.getSpentTime(this.startTimeStampCurrentQuestion, this.endTimeStampCurrentQuestion),
        'timeStamp': this.endTimeStampCurrentQuestion - this.startTimeStampCurrentQuestion
      }
    );
  }


  // getSpentTime(bbb: number) {
  //   let aaa = 1549964148640;
  //   // let delta  = Math.abs(this.endTimeStampCurrentQuestion - this.startTimeStampCurrentQuestion) / 1000;
  //   let delta = Math.abs(bbb - aaa) / 1000;
  //   const minutes = Math.floor(delta / 60) % 60;
  //   delta -= minutes * 60;
  //   const seconds = Math.floor(delta % 60)
  //   console.log(9999999, minutes, seconds);
  //   return 0;
  // }

  getInputValue(answer: any) {
    this.currentAnswer = answer;
    // console.log(11111111, answer);
    this.checkAnswer(answer);
  }

  getTimeStamp() {
    return this._sharedService.getCurrentTimeStamp();
  }

  // aaaa() {
  //   this.endTimeStamp = this._sharedService.getCurrentTimeStamp();
  //   let seconds = (this.endTimeStamp - this.startTimeStamp) / 1000;
  //   console.log(444444, seconds);
  // }

  setMinMaxValue() {
    if (this.difficulty.level === 1) {
      this.minFirstNumber = 1;
      this.maxFirstNumber = 9;
      this.minSecondNumber = 1;
      this.maxSecondNumber = 9;
    }
    if (this.difficulty.level === 2) {
      this.minFirstNumber = 10;
      this.maxFirstNumber = 99;
      this.minSecondNumber = 1;
      this.maxSecondNumber = 9;
    }
    if (this.difficulty.level === 3) {
      this.minFirstNumber = 10;
      this.maxFirstNumber = 99;
      this.minSecondNumber = 10;
      this.maxSecondNumber = 99;
    }
    if (this.difficulty.level === 4) {
      this.minFirstNumber = 100;
      this.maxFirstNumber = 999;
      this.minSecondNumber = 100;
      this.maxSecondNumber = 999;
    }

  }

  uuu() {
    // this.getSpentTime(this._sharedService.getCurrentTimeStamp());
  }

  aaaa() {

  }
}
