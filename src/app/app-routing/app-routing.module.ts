import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from '../UI/add-category/add-category.component'
import { AddWorkoutComponent } from '../UI/add-workout/add-workout.component'
import { EditWorkoutComponent } from '../UI/edit-workout/edit-workout.component'
import { StartWorkoutComponent } from '../UI/start-workout/start-workout.component'
import { EndWorkoutComponent } from '../UI/end-workout/end-workout.component'
import { ViewAllWorkoutComponent } from '../UI/view-all-workout/view-all-workout.component'
import { WorkoutHomeComponent } from '../UI/workout-home/workout-home.component'
import { UicheckComponent } from '../UI/uicheck/uicheck.component'

const routes: Routes = [
  {
    path: 'AddCategory',
    component: AddCategoryComponent,
},
{
  path: 'AddWorkout',
  component: AddWorkoutComponent,
},
{
  path: 'EditWorkout/:id',
  component: EditWorkoutComponent,
},
{
  path: 'StartWorkout/:id',
  component: StartWorkoutComponent,
},
{
  path: 'EndWorkout/:id',
  component: EndWorkoutComponent,
},
{
  path: 'ViewAllWorkout',
  component: ViewAllWorkoutComponent,
},
{
    path: 'WorkoutHome',
    component: WorkoutHomeComponent,
},
{
  path: '',
  component: ViewAllWorkoutComponent,
},
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
],
  declarations: []
})
export class AppRoutingModule { }
