import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SharedServiceService} from '../shared/services/shared-service.service';
import {MathInterfacesLevels} from '../shared/models/mathInterfaces';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {
  rightAnswer: number;
  wrongAnswer: number;
  totalTasks: number;
  tasksLeft: number;
  difficult: MathInterfacesLevels;
  showError: boolean;
  showStatistics: boolean;
  showTask: boolean;
  statistic: any;

  constructor(
    private _router: Router,
    private _sharedService: SharedServiceService
  ) {
    this.wrongAnswer = 0;
    this.rightAnswer = 0;
    this.showStatistics = false;
    _sharedService.changeEmitted$.subscribe(result => {
      this.processCurrentAnswer(result);
    });
  }

  ngOnInit() {
    this.totalTasks = this._sharedService.getNumberOfTasks();
    if(!this.totalTasks){
      this.totalTasks=15;
    }
    this.tasksLeft = this.totalTasks;
    this.difficult = this._sharedService.getDifficulty();
    this.showTask = true;
    this.statistic = {};
  }

  goto() {
    this._router.navigate(['/exercise/adding']);
  }

  processCurrentAnswer(result: boolean) {
    if (result) {
      this.tasksLeft--;
      this.rightAnswer++;
    } else {
      this.wrongAnswer++;
      // this.isShowError();
    }
    if (this.tasksLeft === 0) {
      const statisticTemp = this._sharedService.getStatisics();
      console.log(99999999, statisticTemp);
      this.mapStatisticView(statisticTemp);
      this.showStatistics = true;
      this.showTask = false;


    }
  }

  mapStatisticView(statisticTemp: any) {
    this.statistic.totalTasks = this.totalTasks;
    this.statistic.totalErrors = this.wrongAnswer;
    this.statistic.time = statisticTemp.time;
    this.statistic.fastestSolved = statisticTemp.tasks[0];
    this.statistic.slowestSolved = statisticTemp.tasks[0];
    statisticTemp.tasks.forEach((x: any) => {
      if (this.statistic.fastestSolved['timeStamp'] > x.timeStamp) {
        this.statistic.fastestSolved = x;
      }
      if (this.statistic.slowestSolved['timeStamp'] < x.timeStamp) {
        this.statistic.slowestSolved = x;
      }
    });
    // this.statistic.fastestSolved
    // this.statistic.slowestSolved
    console.log(88888888, this.statistic);
  }

  private isShowError() {
    this.showError = true;
    // setTimeout(() => {
    //   this.showError = false;
    // }, 2000);
  }

  returnToMain() {
    this._router.navigate(['/home']);
  }

  repeatExercise() {
    alert('coming soon')
  }
}
