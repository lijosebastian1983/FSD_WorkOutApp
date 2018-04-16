import { Injectable } from '@angular/core';

@Injectable()
export class SharedServiceService {
 

  FormatDateTime(d1:Date,type:string)
  {       
      if(type=="date")
      {
          return d1.getDate() +"/"+d1.getMonth()+1+"/"+d1.getFullYear();
      }
      else
      {
          return d1.getHours()+":"+d1.getMinutes()+":"+d1.getSeconds();
      }
  }

   


}
