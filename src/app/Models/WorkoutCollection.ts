
export class WorkoutCollection{
    workout_id :number;
    workout_title :string;
    workout_note :string;
    calories_burn_per_min :number;
    category_id:number;  
    constructor(workoutid:number,workouttitle:string,workoutnote:string,
        caloriesburnpermin:number,categoryid:number)
    {
         this.workout_id=workoutid;
         this.workout_title=workouttitle;
         this.workout_note=workoutnote;
         this.calories_burn_per_min=caloriesburnpermin;
         this.category_id  =categoryid;         
    }

}