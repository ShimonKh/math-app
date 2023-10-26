import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {FractionsComponent} from './fractions/fractions.component';
import { HomeComponent } from './home/home.component';
import {SharedModuleModule} from './shared/shared-module.module';
import { LevelOfDifficultyComponent } from './level-of-difficulty/level-of-difficulty.component';
import {SharedServiceService} from './shared/services/shared-service.service';

@NgModule({
  declarations: [
    AppComponent,
    FractionsComponent,
    HomeComponent,
    LevelOfDifficultyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    SharedModuleModule,
  ],
  providers: [SharedServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
