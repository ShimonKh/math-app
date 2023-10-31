import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SharedServiceService} from '../../shared/services/shared-service.service';

@Component({
  selector: 'app-quadratic-equation',
  templateUrl: './quadratic-equation.component.html',
  styleUrls: ['./quadratic-equation.component.css']
})
export class QuadraticEquationComponent implements OnInit {
  @ViewChild('firstElement') firstElement: ElementRef;
  root1: number;
  root2: number;
  answer1: string;
  answer2: string;
  equation: any;
  Sindex: number;
  Pindex: number;
  showError = false;

  constructor(private _sharedService: SharedServiceService) {
  }

  ngOnInit() {
    this.createNewTask();
  }

  ngAfterViewInit() {
    this.firstElement.nativeElement.focus();
  }

  createNewTask() {
    this.answer1 = '';
    this.answer2 = '';
    this.root1 = this._sharedService.getRandom(-30, 30);
    this.root2 = this._sharedService.getRandom(-30, 30, true);
    this.Sindex = this.root1 + this.root2;
    this.Pindex = this.root1 * this.root2;
  }

  checkAnswer() {
    this.showError = false;
    console.log(this.root1 * 2, this.root2 * 2);
    if (this.root1 == Number(this.answer1) && this.root2 == Number(this.answer2) ||
      this.root1 == Number(this.answer2) && this.root2 == Number(this.answer1)
    ) {
      this._sharedService.emitCurrentAnswer(true);
      this.createNewTask();
    } else {
      this.showError = true;
      this._sharedService.emitCurrentAnswer(false);
    }
    this.firstElement.nativeElement.focus();
  }

  inputKeyup() {
    this.showError = false;
  }
}
