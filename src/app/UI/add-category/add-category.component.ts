import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CategoryServiceService} from '../../Services/category-service.service'
import {Category} from '../../Models/Category'
import { FormGroup, FormBuilder, Validators , ReactiveFormsModule} from '@angular/forms';
import {DialogModule} from 'primeng/dialog';

import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  constructor(private _categoryservice: CategoryServiceService, 
       private _router: Router,private formBuilder: FormBuilder,
       private confirmationService: ConfirmationService) { }

  public categorys: Category[];
  public category: Category;
  errorMessage: string;
  filterString: string='';
  reMessage:string;
  form: FormGroup;
  display: boolean = false;

  messageDisplay :string=''
  messageType:string=''

  updateCatName :string;
  updateCatId :number;

    updateCategory: Category;

  ngOnInit() {
    this.form = this.formBuilder.group({
      categoryz: [null,Validators.required]
      
    });
      this.ResetPage();
  }

  ResetPage()
  {
    this.getCategory("");
    this.category =new Category(0,"")
  }


  getCategory(name:string) {
    this._categoryservice.getCategory(name)
        .subscribe(
        value => this.categorys = value,
        error => this.errorMessage = <any>error);
}

AddCategory(){
  this.categorys =[];
  if(this.category.category_id==0)
  {
  this._categoryservice.AddCategory(this.category)
        .subscribe(
        value => {this.messageDisplay = value;this.messageType='success';this.getCategory("")},
        error => {this.messageDisplay = <any>error;this.messageType='danger'});
  }
  else
  {
    this._categoryservice.UpdateCategory(this.category)
        .subscribe(
        value => {this.messageDisplay = value;this.messageType='success';this.getCategory("")},
        error => {this.messageDisplay = <any>error;this.messageType='danger'});
  }  
}

UpdateCategory()
{ 
  this.updateCategory=new Category(this.updateCatId,this.updateCatName)
  this.display = false;
  this._categoryservice.UpdateCategory(this.updateCategory)
        .subscribe(
        value => {this.messageDisplay = value;this.messageType='success';this.getCategory("")},
        error => {this.messageDisplay = <any>error;this.messageType='danger'});
}

DeleteCategory(cat:Category)
{
  this.confirmationService.confirm({
    message: 'Do you want to remove the category?',
    accept: () => {
    this._categoryservice.DeleteCategory(cat)
          .subscribe(
            value => {this.messageDisplay = value;this.messageType='success';this.getCategory("")},
            error => {this.messageDisplay = <any>error;this.messageType='danger'});
          }
        });
}
 

showEditCategory(cat:Category) {
  this.updateCatName=cat.category_name;
  this.updateCatId=cat.category_id;
  this.display = true;
}

CancelUpdate()
{
  this.display = false;
}
}
