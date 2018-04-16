export class WorkoutDetails{
    WorkoutId: number;
    WorkoutTitle:string;
    IsStarted:boolean;
    IsEnded:boolean;
    constructor(workoutId:number,workoutTitle:string,isStarted:boolean
    ,isEnded:boolean)
    {
        this.WorkoutId=workoutId;
        this.WorkoutTitle=workoutTitle;
        this.IsStarted=isStarted;
        this.IsEnded=isEnded;
    }
}