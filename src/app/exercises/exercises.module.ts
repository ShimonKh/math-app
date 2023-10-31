import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule} from '@angular/forms';
import {SharedModuleModule} from '../shared/shared-module.module';
import {ExercisesComponent} from './exercises.component';
import {ExercisesRoutingModule} from './exercises-routing.module';
import {AddingComponent} from './adding/adding.component';
import {MultiNullsComponent} from './multi-nulls/multi-nulls.component';
import {QuadraticEquationComponent} from './quadratic-equation/quadratic-equation.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModuleModule,
    ExercisesRoutingModule
  ],
  declarations: [
    ExercisesComponent,
    AddingComponent,
    MultiNullsComponent,
    QuadraticEquationComponent
  ]
})
export class ExercisesModule { }
