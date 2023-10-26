import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-fractions',
  templateUrl: './fractions.component.html',
  styleUrls: ['./fractions.component.css']
})
export class FractionsComponent implements OnInit {

  numberFractions: number;
  checkedSquaresArray: any = [];
  selectedSquare: number;

  constructor() {
    this.numberFractions = 4;
  }

  ngOnInit() {
    for (let i = 0; i < this.numberFractions; i++) {
      this.checkedSquaresArray.push(false);
    }
  }

  clickSquare(i: number) {
    console.log(1111, i);
    this.checkedSquare(i);
    this.selectedSquare = i;
  }

  private checkedSquare(i: number) {

    this.checkedSquaresArray[i] = !this.checkedSquaresArray[i]
  }
}
