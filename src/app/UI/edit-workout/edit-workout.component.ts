import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators , ReactiveFormsModule} from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';
import {CategoryServiceService} from '../../Services/category-service.service'
import {Category} from '../../Models/Category';
import {WorkoutCollection} from '../../Models/WorkoutCollection';
import {WorkoutServiceService} from '../../Services/workout-service.service';
import { Subscription } from 'rxjs/Subscription';
import {DialogModule} from 'primeng/dialog';

@Component({
  selector: 'app-edit-workout',
  templateUrl: './edit-workout.component.html',
  styleUrls: ['./edit-workout.component.css']
})
export class EditWorkoutComponent implements OnInit {
  constructor(private _categoryservice: CategoryServiceService,
    private _workoutService:WorkoutServiceService,
       private _router: Router,private _route:ActivatedRoute,private formBuilder: FormBuilder) { }
 
    private sub:Subscription;
    public wCollection: WorkoutCollection;
    errorMessage: string;
    reMessage:string; 
    public categorys: Category[];
    isPageEnable:boolean;
    isCatLoaded:boolean;
    isValueLoaded:boolean;
    form: FormGroup;

    messageDisplay :string=''
    messageType:string=''

    display: boolean = false;
    addCatName :string;
    addCategory: Category;

    ngOnInit() {  
      this.form = this.formBuilder.group({
        title: [null,Validators.required],
        note: [null, Validators.required],       
        category: [null,[Validators.required,Validators.min(1)]],
      });

        this.isPageEnable=false;  
        this.isCatLoaded=false;  
        this.isValueLoaded=false; 
        this.wCollection= new WorkoutCollection(0,"","",0.0,0);
        this.sub=this._route.params.subscribe(
          params => {
            let id=+params['id'];  
            this.ResetPage(id);
          } 
        )
    }

    EnablePage()
    {
    
        this.isPageEnable=this.isCatLoaded && this.isValueLoaded;
        

    }

    ResetPage(id:number)
    {   
      this.GetWorkoutCollectionById(id);    
      this.GetCategory();      
    }
 
    GetCategory()
    {
      this._categoryservice.getCategory("")
      .subscribe(
      value => {this.categorys = value;this.isCatLoaded=true;
        this.EnablePage();},
      error => this.errorMessage = <any>error)    
    }
    
    GetWorkoutCollectionById(id:number)
    {      
      this._workoutService.GetWorkoutCollectionById(id)
        .subscribe(
        value => {this.wCollection = value;this.isValueLoaded=true;this.EnablePage()},
        error => this.errorMessage = <any>error)        
    }

   UpdateWorkoutCollection()
  {
    this._workoutService.UpdateWorkoutColletion(this.wCollection)
        .subscribe(
        value => {this.messageDisplay = value;this.messageType='success'},
        error => {this.messageDisplay = <any>error;this.messageType='danger'});
  }

  RedirectViewAll()
  {
    this._router.navigate(['ViewAllWorkout']);
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
        value => {this.messageDisplay = value;this.messageType='success';this.GetCategory()},
        error => {this.messageDisplay = <any>error;this.messageType='danger'});
  }
}
