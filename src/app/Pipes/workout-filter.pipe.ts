import { Pipe, PipeTransform } from '@angular/core';
import {WorkoutDetails} from '../Models/WorkoutDetails'

@Pipe({
  name: 'workoutFilter'
})
export class WorkoutFilterPipe implements PipeTransform {

  public transform(values: WorkoutDetails[], filter: string): WorkoutDetails[] {
    
    if (!values || !values.length) return [];
    if (!filter) return values;
    // Filter items array, items which match will return true
    return values.filter(v => v.WorkoutTitle.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
  }

}
