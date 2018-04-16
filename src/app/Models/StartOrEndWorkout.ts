export class StartOrEndWorkout{
    WorkoutId: number;
    WorkoutTitle:string;
    Comment:string;
    DateTimeInfo:Date;
    DateInfo:string;
    TimeInfo:string;
    Status:boolean;
    constructor(workoutId: number,
        workoutTitle:string,
        comment:string,
        dateTimeInfo:Date,
        dateInfo:string,
        timeInfo:string,
        status:boolean)
    {
        this.WorkoutId=workoutId;
        this.WorkoutTitle=workoutTitle;
        this.Comment=comment;
        this.DateTimeInfo=dateTimeInfo;
        this.DateInfo=dateInfo;
        this.TimeInfo=timeInfo;
        this.Status=status;
    }
}