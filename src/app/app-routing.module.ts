import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LevelOfDifficultyComponent} from './level-of-difficulty/level-of-difficulty.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  // {
  //   path: 'addition',
  //   component: AdditionComponent
  // },
  {
    path: 'levels',
    component: LevelOfDifficultyComponent
  },
  {
    path: 'exercise',
    loadChildren: () => import('./exercises/exercises.module').then(m => m.ExercisesModule),
  },
  // {
  //   path: 'exercise',
  //   component: ExercisesComponent
  //   ,
  //   children: [
  //     {
  //       path: 'additi',
  //       component: AddingComponent
  //     }
  //   ]
  // },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
