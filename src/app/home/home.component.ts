import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MathInterfacesMenuItem} from '../shared/models/mathInterfaces';
import {SharedServiceService} from '../shared/services/shared-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menuObject: MathInterfacesMenuItem[];

  constructor(
    private _router: Router, private _sharedService: SharedServiceService) {
    this.menuObject = [
      {name: 'addition - subtraction', id: 0, urlPath: '/levels'},
      {name: 'multiplication - division', id: 1, urlPath: '/levels'},
      {name: 'fractions', id: 2, urlPath: '/levels'},
      {name: 'quadratic equation', id: 3, urlPath: '/levels'},
    ];
  }

  ngOnInit() {
  }


  getSelectedMenu(item: MathInterfacesMenuItem) {
    if (item.id === 0) {
      this._router.navigate(['/levels'], {queryParams: {task: item.id}});
    }
    else if (item.id === 3) {
      this._sharedService.setNumberOfTasks(10);
      this._router.navigate(['/exercise/quadraticEquation'], {queryParams: {task: item.id}});
    }
    else {
      alert('Coming soon');
    }
  }
}
