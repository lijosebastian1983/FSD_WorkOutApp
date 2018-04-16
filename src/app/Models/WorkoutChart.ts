export class WorkoutChart{
    WorkoutTimeDay: number;
    WorkoutTimeWeek: number;
    WorkoutTimeMonth: number;

    CaloriesBurnedWeek: number;
    CaloriesBurnedMonth: number;
    CaloriesBurnedYear: number;
    
    WeeklyChart:number[];
    MonthlyChart:number[];
    YearlyChart:number[];
    constructor(workoutTimeDay: number,workoutTimeWeek: number,
        workoutTimeMonth: number,caloriesBurnedWeek: number,
        caloriesBurnedMonth: number,caloriesBurnedYear: number)
    {
        this.WorkoutTimeDay=workoutTimeDay;
        this.WorkoutTimeWeek=workoutTimeWeek;
        this.WorkoutTimeMonth=workoutTimeMonth;

        this.CaloriesBurnedWeek=caloriesBurnedWeek;
        this.CaloriesBurnedMonth=caloriesBurnedMonth;
        this.CaloriesBurnedYear=caloriesBurnedYear;
        
        // this.WeeklyChart=weeklyChart;
        // this.MonthlyChart=monthlyChart;
        // this.YearlyChart=yearlyChart;
    }
}