import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MathInterfacesLevels} from '../shared/models/mathInterfaces';
// import * as constans from '../shared/constants/constants';
import {SharedServiceService} from '../shared/services/shared-service.service';
import {MenuConfig} from '../shared/constants/constants';

@Component({
  selector: 'app-level-of-difficulty',
  templateUrl: './level-of-difficulty.component.html',
  styleUrls: ['./level-of-difficulty.component.css']
})
export class LevelOfDifficultyComponent implements OnInit {

  choosenDifficulty: MathInterfacesLevels;
  choosenNumberTasks: number;
  selectedTaskId: number;
  selectedTask: MathInterfacesLevels[];
  taskAddition: MathInterfacesLevels;
  taskMultiplication: MathInterfacesLevels;
  taskFractions: MathInterfacesLevels;

  constructor(
    private _router: Router,
    protected _route: ActivatedRoute,
    private _sharedService: SharedServiceService
  ) {
    this._route.queryParams.subscribe((params: any) => {
      this.selectedTaskId =  +params.task;
      // this.selectedTask = MenuConfig['TASKS_LEVEL_' + this.selectedTaskId];
      this.selectedTask = MenuConfig.TASKS_LEVEL_0;
    });
  }

  ngOnInit(): void {
  }

  getChoosenLevel(choosenLevelObject: MathInterfacesLevels) {
    this.choosenDifficulty = choosenLevelObject;
  }

  getTasksNumber(number: number) {
    this.choosenNumberTasks = number;
  }

  startExercise() {
    this._sharedService.setNumberOfTasks(this.choosenNumberTasks);
    this._sharedService.setDifficulty(this.choosenDifficulty);
    this._router.navigate(['exercise/adding']);
  }

}
