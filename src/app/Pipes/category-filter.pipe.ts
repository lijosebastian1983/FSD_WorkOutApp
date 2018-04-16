import { Pipe, PipeTransform } from '@angular/core';
import {Category} from '../Models/Category'
@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {

  public transform(values: Category[], filter: string): Category[] {
    
    if (!values || !values.length) return [];
    if (!filter) return values;
    // Filter items array, items which match will return true
    return values.filter(v => v.category_name.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
  }

}
