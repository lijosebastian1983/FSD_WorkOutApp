import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {WorkoutActive} from '../../Models/WorkoutActive';
import {WorkoutServiceService} from '../../Services/workout-service.service';
import { Subscription } from 'rxjs/Subscription';
import {WorkoutCollection} from '../../Models/WorkoutCollection';
import {SharedServiceService} from '../../Services/shared-service.service';
import {StartOrEndWorkout} from '../../Models/StartOrEndWorkout';
import { FormGroup, FormBuilder, Validators , ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-start-workout',
  templateUrl: './start-workout.component.html',
  styleUrls: ['./start-workout.component.css']
})
export class StartWorkoutComponent implements OnInit {
  constructor( private _workoutService:WorkoutServiceService,
       private _router: Router,private _route:ActivatedRoute,
       private _shareadService:SharedServiceService,
       private formBuilder: FormBuilder) { }

  private sub:Subscription;  
  public wActive: StartOrEndWorkout;
  errorMessage: string;
  reMessage:string;  
  isPageEnable:boolean;
  form: FormGroup;

  messageDisplay :string=''
  messageType:string=''

  ngOnInit() {  
    this.form = this.formBuilder.group({
      startdate: [null,[Validators.required]],
      starttime: [null, Validators.required],       
    });
    this.isPageEnable=false;         
    this.sub=this._route.params.subscribe(
      params => {
        let id=+params['id'];
        this.ResetPage(id);               
      } 
    )    
  }

  ResetPage(id:number)
    {  
      this.wActive= new StartOrEndWorkout(id,"","",null,"","",false);      
      this._workoutService.GetStartWorkoutDetails(id)
          .subscribe(
          value => {
                    this.wActive = value;                    
                    this.isPageEnable=true;                     
                   },
          error => this.errorMessage = <any>error)       
    }

  StartWorkout()
  {
    this._workoutService.StartWorkOut(this.wActive)
        .subscribe(
        value => {this.reMessage = value;
                    if(this.reMessage!="")
                    {
                        this.messageDisplay=this.reMessage;
                        this.messageType='danger';
                    }
                    else
                      this.RedirectViewAll()
                  },
        error => this.errorMessage = <any>error);
  }
  RedirectViewAll()
  {
    this._router.navigate(['ViewAllWorkout']);
  }

  
 
}
