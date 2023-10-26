import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ExercisesComponent} from './exercises.component';
import {AddingComponent} from './adding/adding.component';
import {MultiNullsComponent} from './multi-nulls/multi-nulls.component';

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
