import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddMenuComponent} from './components/add-menu/add-menu.component';
import {TasksNumberComponent} from './components/tasks-number/tasks-number.component';
import {InputAnswerComponent} from './components/input-answer/input-answer.component';
import {FormsModule} from '@angular/forms';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {DecimaNumberDirective} from './directives/decimal-number.directive';



@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    FormsModule,
  ],
  declarations: [
    AddMenuComponent,
    TasksNumberComponent,
    InputAnswerComponent,
    DecimaNumberDirective
  ],
  exports: [
    AddMenuComponent,
    TasksNumberComponent,
    InputAnswerComponent,
    DecimaNumberDirective
  ],
  providers: [
  ]
})
export class SharedModuleModule {
}
