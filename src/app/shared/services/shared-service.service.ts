import {Injectable} from '@angular/core';
import {MathInterfacesLevels} from '../models/mathInterfaces';
import {Subject} from 'rxjs';

@Injectable()
export class SharedServiceService {
  numberOfTask: number;
  levelDifficulty: MathInterfacesLevels;
  statistic: any;
  // Observable string sources
  private emitCurrentAnswerSource = new Subject<any>();
  // Observable string streams
  changeEmitted$ = this.emitCurrentAnswerSource.asObservable();

  // Service message commands
  emitCurrentAnswer(change: any) {
    this.emitCurrentAnswerSource.next(change);
  }

  constructor() {
  }

  // returns a random number between min and max (both included):
  getRandom(min: number, max: number, excludeZero = false): number {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return excludeZero ? num : num === 0 ? this.getRandom(min, max, true) : num;
  }

  getRndBoolean() {
    return Math.random() >= 0.5;
  }

  setNumberOfTasks(number: number) {
    this.numberOfTask = number;
  }

  getNumberOfTasks() {
    return this.numberOfTask;
  }

  setDifficulty(item: MathInterfacesLevels) {
    this.levelDifficulty = item;
  }

  getDifficulty() {
    return this.levelDifficulty;
  }


  getCurrentTimeStamp() {
    return new Date().getTime();
  }

  getSpentTime(startTime: number, finishTime: number) {
    let delta = Math.abs(finishTime - startTime) / 1000;
    const minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;
    const seconds = Math.floor(delta % 60);
    return {minutes: minutes, seconds: seconds};
  }

  setStatisics(statisticObject: any) {
    this.statistic = statisticObject;
  }

  getStatisics() {
    return this.statistic;
  }


}
