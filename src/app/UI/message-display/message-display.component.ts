import { Component, OnChanges,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message-display',
  templateUrl: './message-display.component.html',
  styleUrls: ['./message-display.component.css']
})
export class MessageDisplayComponent implements OnChanges {
  @Input() messageDisplay:string
  @Input() messageType:string

  messageString:string
  className:string  

  ngOnChanges():void {   
      this.messageString=this.messageDisplay
      
      if(this.messageType=='success')
        this.className='alert alert-success'
      else if(this.messageType=='info')
        this.className='alert alert-info'
      else if(this.messageType=='warning')
        this.className='alert alert-warning'
      else if(this.messageType=='danger')
        this.className='alert alert-danger'
      else
        this.className=''
  }

}
