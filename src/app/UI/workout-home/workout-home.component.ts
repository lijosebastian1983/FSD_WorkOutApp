import { Component, OnInit} from '@angular/core';
import {ChartModule} from 'primeng/chart';
import {Router,ActivatedRoute} from '@angular/router';
import {WorkoutActive} from '../../Models/WorkoutActive';
import {WorkoutServiceService} from '../../Services/workout-service.service';
import { Subscription } from 'rxjs/Subscription';
import {WorkoutChart} from '../../Models/WorkoutChart';

@Component({
  selector: 'app-workout-home',
  templateUrl: './workout-home.component.html',
  styleUrls: ['./workout-home.component.css']
})
export class WorkoutHomeComponent implements OnInit {
  chartDetails:WorkoutChart;
  data1: any;
  data2: any;
  data3: any;
  errorMessage: string;
  reMessage:string;  
  isPageEnable:boolean;
  chartOptions:any;
   displayChart:boolean; 


  messageDisplay :string=''
  messageType:string=''
  constructor(private _workoutService:WorkoutServiceService,
    private _router: Router,private _route:ActivatedRoute) {    
    this.messageDisplay="Chart details are getting loaded.."      
    this.messageType="info"        
    this.chartOptions={
        legend:{
            display:false
        }
    }    

    this.chartDetails= new WorkoutChart(0,0,0,0,0,0); 
    this._workoutService.GetWorkoutChartDetails()
          .subscribe(
          value => {
                   this.chartDetails = value;                                                   
                   if(this.chartDetails.WorkoutTimeDay==0 &&this.chartDetails.WorkoutTimeWeek==0 &&this.chartDetails.WorkoutTimeMonth==0 )
                    {
                          this.messageDisplay="No Ended workout to display"      
                          this.messageType="warning"      
                    }
                    else{
                    this.displayChart=true;
                    this.messageDisplay=""      
                    this.messageType="" 
                   this.PopulateChart();}                     
                   },
          error => this.errorMessage = <any>error)     

    
  }

  ngOnInit() {
  }

  

  PopulateChart()
  {
    this.data1 = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Week Chart',
                backgroundColor: ['#42eef4','#f2ef54','#413bdd','#e28a3d','#18911a','#bcbcb3','#09094c'],
                borderColor: '#1E88E5',
                data: this.chartDetails.WeeklyChart
            } 
        ]
    }

    this.data2 = {
      labels: ['Week1', 'Week2', 'Week3', 'Week4', 'Week5'],
       
      datasets: [
          {
              label: 'Month Chart',
              backgroundColor: ['#42eef4','#f2ef54','#413bdd','#e28a3d','#18911a'],
              borderColor: '#1E88E5',
              data: this.chartDetails.MonthlyChart
          } 
      ]
  }

  this.data3 = {
      labels: ['1', '2', '3', '4', '5', '6', '7','8','9','10','11','12'],
      datasets: [
          {
              label: 'Year Chart',
              backgroundColor: ['#820505','#bf7815','#4c0282','#7a1267','#594502','#0e591c','#888c8c','#00024c','#0ba0a3','#edf26d','#ed95e8','#db2543'],
              borderColor: '#1E88E5',
              data:this.chartDetails.YearlyChart
          } 
      ]
  }
  }

}
