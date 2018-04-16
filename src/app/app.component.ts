import { Component } from '@angular/core';
import {WorkoutServiceService} from './Services/workout-service.service'
import {CategoryServiceService} from './Services/category-service.service'
import {SharedServiceService} from './Services/shared-service.service'
import {ConfirmationService} from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[WorkoutServiceService,CategoryServiceService,SharedServiceService,ConfirmationService]
})
export class AppComponent {
  title = 'app';

}
