import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators , ReactiveFormsModule} from '@angular/forms';

import {Router} from '@angular/router';
import {CategoryServiceService} from '../../Services/category-service.service'
import {Category} from '../../Models/Category';
import {WorkoutCollection} from '../../Models/WorkoutCollection';
import {WorkoutServiceService} from '../../Services/workout-service.service';
import {DialogModule} from 'primeng/dialog';


@Component({
  selector: 'app-add-workout',
  templateUrl: './add-workout.component.html',
  styleUrls: ['./add-workout.component.css']
})
export class AddWorkoutComponent implements OnInit { 
  
public wCollection: WorkoutCollection;
public categorys: Category[];
errorMessage: string;
reMessage:string;
form: FormGroup;

messageDisplay :string=''
messageType:string=''

display: boolean = false;
addCatName :string;
addCategory: Category;

constructor(private _categoryservice: CategoryServiceService,
  private _workoutService:WorkoutServiceService,
     private _router: Router,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: [null,Validators.required],
      note: [null, Validators.required],
      calories: [null,[Validators.required,Validators.min(0.1)]],
      category: [null,[Validators.required,Validators.min(1)]],
    });
        this.ResetPage();
    }
  
  ResetPage()
  {     
    this.wCollection =new WorkoutCollection(0,"","",0.0,0);
    this.GetCategory("");
  }

  AddWorkoutCollection()
  {
    this._workoutService.AddWrokoutCollection(this.wCollection)
        .subscribe(
        value => {this.messageDisplay = value;this.messageType='success'},
        error => {this.messageDisplay = <any>error;this.messageType='danger'});
  }

  GetCategory(name:string) {
    this._categoryservice.getCategory(name)
        .subscribe(
        value => this.categorys = value,
        error => this.errorMessage = <any>error);
  }
  ReduceCaloriesValue()
  {
   
    if(this.wCollection.calories_burn_per_min > 0.0 )
    {
      this.wCollection.calories_burn_per_min=
      parseFloat( (this.wCollection.calories_burn_per_min - 0.1).toFixed(2));
    }
  }
  AddCaloriesValue()
  {
    this.wCollection.calories_burn_per_min=
    parseFloat( (this.wCollection.calories_burn_per_min + 0.1).toFixed(2));
  }

  RedirectToAddCategory()
  {
    this.display=true;
  }

  SaveCategory()
  {
    this.addCategory=new Category(0,this.addCatName)
    this.display = false;
    this.addCatName='';
    this._categoryservice.AddCategory(this.addCategory)
        .subscribe(
        value => {this.messageDisplay = value;this.messageType='success';this.GetCategory("")},
        error => {this.messageDisplay = <any>error;this.messageType='danger'});
  }
  
}
