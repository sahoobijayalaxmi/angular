import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
  inputs:['achild','f1'],
  outputs:['eventObj'],
})
export class Child1Component {
  achild:any;
  f1:any;
  name:string='lity';

  // @Input() employees:any[]=[];  
  eventObj= new EventEmitter
  senddata(){
    this.eventObj.emit(this.name);
  }

}
