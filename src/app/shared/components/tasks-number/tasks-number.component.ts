import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MenuConfig} from '../../constants/constants';

@Component({
  selector: 'app-tasks-number',
  templateUrl: './tasks-number.component.html',
  styleUrls: ['./tasks-number.component.css']
})
export class TasksNumberComponent implements OnInit {
  @Output() getSelectedTasksNumber: EventEmitter<any> = new EventEmitter();
  numberOfTasksList: any;
  selectedNumber: number;

  constructor() {
    this.numberOfTasksList =  MenuConfig.NUMBER_OF_TASK;
    // this.selectedNumber = this.numberOfTasksList[2];
  }

  ngOnInit() {
    this.getNumberOfTasks(this.numberOfTasksList[2]);
  }

  getNumberOfTasks(number: number) {
    this.selectedNumber = number;
    this.getSelectedTasksNumber.emit(number);

  }
}
