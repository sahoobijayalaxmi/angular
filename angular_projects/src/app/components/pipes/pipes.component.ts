import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  name='bijayaLaxmi sahoo';
  mysal='5000';
  today=new Date();
  user={id:1, name:'lity',add:'bang'};
  arr=[10,20,30,40,50];
  msg:any;
}
