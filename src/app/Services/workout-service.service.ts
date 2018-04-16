import { Http, Response,RequestOptions,Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {WorkoutActive} from '../Models/WorkoutActive';
import {Category} from '../Models/Category';
import {WorkoutCollection} from '../Models/WorkoutCollection';
import {WorkoutDetails} from '../Models/WorkoutDetails';
import {StartOrEndWorkout} from '../Models/StartOrEndWorkout';
import { AppSettings} from '../Shared/AppSettings';

@Injectable()
export class WorkoutServiceService {
  
    API_URL: string = AppSettings.API_ENDPOINT +'WorkoutTracker/';
  constructor( private _http: Http) {
  }


AddWrokoutCollection(wrk:WorkoutCollection)
{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(wrk);
    return this._http.post(this.API_URL+'CreateWorkoutCollection/', body, options )
        .map((res: Response) => res.json())
        .catch(this.handleError);
}
 
GetAllWrokoutCollection(param1:string) {
  param1='TEt';
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('name',param1);    
  return this._http.get(this.API_URL+'GetAllWorkoutColletion/', { headers: headers})
      .map(res => <WorkoutDetails[]>res.json())
      .catch(this.handleError);
}

GetWorkoutCollectionById(param1:number) {    
  return this._http.get(this.API_URL+'GetWorkoutCollectionById?id='+param1.toString())
      .map(res => <WorkoutCollection>res.json())
      .catch(this.handleError);
}

UpdateWorkoutColletion(cat:WorkoutCollection)
{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(cat);
    return this._http.post(this.API_URL+'UpdateWorkoutColletion/', body, options )
        .map((res: Response) => res.json());
}

DeleteWorkoutCollection(cat:number)
{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(cat);
    return this._http.post(this.API_URL+'DeleteWorkoutCollection/', body, options )
        .map((res: Response) => res.json());
}

StartWorkOut(wrk:StartOrEndWorkout)
{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(wrk);
    return this._http.post(this.API_URL+'StartWorkout/', body, options )
        .map((res: Response) => res.json());
}

EndWorkOut(wrk:StartOrEndWorkout)
{
    
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(wrk);
    return this._http.post(this.API_URL+'EndWorkOut/', body, options )
        .map((res: Response) => res.json());
}


GetStartWorkoutDetails(param1:number) {    
    return this._http.get(this.API_URL+'GetStartWorkoutDetails?id='+param1.toString())
        .map(res => <StartOrEndWorkout>res.json())
        .catch(this.handleError);
}

GetEndWorkoutDetails(param1:number) {    
    return this._http.get(this.API_URL+'GetEndWorkoutDetails?id='+param1.toString())
        .map(res => <StartOrEndWorkout>res.json())
        .catch(this.handleError);
}

GetWorkoutChartDetails() {    
    return this._http.get(this.API_URL+'GetWorkoutChartDetails')
        .map(res => <WorkoutCollection>res.json())
        .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
