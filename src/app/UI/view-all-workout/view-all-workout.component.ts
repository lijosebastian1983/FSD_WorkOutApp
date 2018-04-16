import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {WorkoutDetails} from '../../Models/WorkoutDetails';
import {WorkoutServiceService} from '../../Services/workout-service.service';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-view-all-workout',
  templateUrl: './view-all-workout.component.html',
  styleUrls: ['./view-all-workout.component.css']
})
export class ViewAllWorkoutComponent implements OnInit {
  constructor(private _workoutService:WorkoutServiceService,
       private _router: Router,private confirmationService: ConfirmationService) { }

  public wCollections: WorkoutDetails[]; 
  errorMessage: string;
  reMessage:string; 
  filterString: string='';

  messageDisplay :string=''
  messageType:string=''
  
  ngOnInit() {
    this.messageDisplay="Please wait..."
    this.messageType="info"
    this.ResetPage();
  }

  ResetPage()
  {
    this.GetWorkoutCollections("");
  }

  GetWorkoutCollections(name:string) {
    this._workoutService.GetAllWrokoutCollection(name)
        .subscribe(
        value => {this.wCollections = value;
                  if(this.wCollections=== undefined || this.wCollections.length == 0)
                   {
                    this.messageDisplay='No workout to display',
                    this.messageType='warning'
                   }
                   else{
                  this.messageDisplay='',
                  this.messageType=''}},
        error => this.errorMessage = <any>error);
}

 

DeleteWorkoutCollection(det: WorkoutDetails)
{
  this.confirmationService.confirm({
    message: 'Do you want to remove the workout?',
    accept: () => {
  this._workoutService.DeleteWorkoutCollection(det.WorkoutId)
        .subscribe(
          value => {this.messageDisplay = value;this.messageType='success';this.GetWorkoutCollections("")},
          error => {this.messageDisplay = <any>error;this.messageType='danger'});
        }
        });
}
 


}
