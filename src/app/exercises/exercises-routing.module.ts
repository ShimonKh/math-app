import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ExercisesComponent} from './exercises.component';
import {AddingComponent} from './adding/adding.component';
import {MultiNullsComponent} from './multi-nulls/multi-nulls.component';
import {QuadraticEquationComponent} from './quadratic-equation/quadratic-equation.component';

const routes: Routes = [
  {
    path: '',
    component: ExercisesComponent
    ,
    children: [
      {
        path: 'adding',
        component: AddingComponent
      },
      {
        path: 'quadraticEquation',
        component: QuadraticEquationComponent
      },
      {
        path: 'nulls',
        component: MultiNullsComponent
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExercisesRoutingModule {
}
