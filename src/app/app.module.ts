import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { WorkoutHomeComponent } from './UI/workout-home/workout-home.component';
import {ChartModule} from 'primeng/chart';
import {RouterModule, Routes} from '@angular/router';  
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ViewAllWorkoutComponent } from './UI/view-all-workout/view-all-workout.component';
import { AddWorkoutComponent } from './UI/add-workout/add-workout.component';
import { AddCategoryComponent } from './UI/add-category/add-category.component';
import { EditWorkoutComponent } from './UI/edit-workout/edit-workout.component';
import { StartWorkoutComponent } from './UI/start-workout/start-workout.component';
import { EndWorkoutComponent } from './UI/end-workout/end-workout.component';
import { CategoryFilterPipe } from './Pipes/category-filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WorkoutFilterPipe } from './Pipes/workout-filter.pipe';
import { CommonModule } from '@angular/common';
import { UicheckComponent } from './UI/uicheck/uicheck.component';
import { MessageDisplayComponent } from './UI/message-display/message-display.component'; 
import {DialogModule} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';


@NgModule({
  declarations: [
    AppComponent,
    WorkoutHomeComponent,    
    ViewAllWorkoutComponent,
    AddWorkoutComponent,
    AddCategoryComponent,
    EditWorkoutComponent,
    StartWorkoutComponent,
    EndWorkoutComponent,
    CategoryFilterPipe,
    WorkoutFilterPipe,     
    UicheckComponent,
    MessageDisplayComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    DialogModule,
    ConfirmDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
