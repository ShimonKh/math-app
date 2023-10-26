import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MathInterfacesLevels} from '../../models/mathInterfaces';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {
  @Input('option-list') optionList: MathInterfacesLevels[] ;
  @Output() choosenLevel: EventEmitter<any> = new EventEmitter();

  // levelsList: MathInterfacesLevels[];

  constructor() {
    // this.levelsList = [
    //   {firstView: 'a + b', secondView: 'a-b', level: 1, isActive: false},
    //   {firstView: 'aa + b', secondView: 'aa-b', level: 2, isActive: false},
    //   {firstView: 'aa + bb', secondView: 'aa-bb', level: 3, isActive: true},
    //   {firstView: 'aaa + bbb', secondView: 'aaa-bbb', level: 4, isActive: false},
    // ];
  }

  ngOnInit() {
    this.getExercise(this.optionList[0]);
  }


  getExercise(item: MathInterfacesLevels) {
    this.setItemActive(item);
    this.choosenLevel.emit(item);

  }

  private setItemActive(item: MathInterfacesLevels) {
    this.optionList.forEach((x: MathInterfacesLevels) => {
      if (x.level === item.level) {
        x.isActive = true;
      } else {
        x.isActive = false;
      }
    });
  }
}
