import { Http, Response,RequestOptions,Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {WorkoutActive} from '../Models/WorkoutActive'
import {Category} from '../Models/Category'
import { AppSettings} from '../Shared/AppSettings';
// import { Headers } from '@angular/http/src/headers';

@Injectable()
export class CategoryServiceService {

  API_URL:string = AppSettings.API_ENDPOINT+ 'Category/';
  constructor( private _http: Http) {
  }

  getCategory(param1:string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('name',param1);    
    return this._http.get(this.API_URL+'GetAllCategory/', { headers: headers})
        .map(res => <Category[]>res.json())
        .catch(this.handleError);
}

AddCategory(cat:Category)
{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(cat);
    return this._http.post(this.API_URL+'CreateCategory/', body, options )
        .map((res: Response) => res.json())
        .catch(this.handleError);
}

UpdateCategory(cat:Category)
{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(cat);
    return this._http.post(this.API_URL+'UpdateCategory/', body, options )
        .map((res: Response) => res.json());
}

DeleteCategory(cat:Category)
{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(cat);
    return this._http.post(this.API_URL+'DeleteCategory/', body, options )
        .map((res: Response) => res.json());
}

private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
}

}
