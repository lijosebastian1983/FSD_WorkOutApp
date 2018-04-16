export class WorkoutActive{
    workout_active_id :number;
    workout_id :number;
    start_time:Date;
    start_date:Date;
    end_date :Date;
    end_time :Date;
    comment :string;
    status :boolean;
    constructor(workoutactiveid:number,workoutid:number,starttime:Date,
        startdate:Date,enddate:Date,endtime:Date,comments:string,status1:boolean)
   {
        this.workout_active_id =workoutactiveid;
        this.workout_id =workoutid;
        this.start_time=starttime;
        this.start_date=startdate;
        this.end_date =enddate;
        this.end_time =endtime;
        this.comment =comments;
        this.status =status1;
   }
}