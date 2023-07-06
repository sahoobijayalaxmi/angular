import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  a:number=10;
  myName:string='';
  arr:any=[10,20,30,40];

  @ViewChild('newNum') newNum:any;


  constructor(){
    console.log('parent constructor');
    this.a=10;
    console.log(this.newNum);
  }

  ngAfterViewInit(){
    console.log('parent ngAfterViewInit');
    console.log(this.newNum.nativeElement);
    this.newNum.nativeElement.focus();
  }
  // employees=[{name:'Lity' ,age:24 ,desn:'developer'},
  //            {name:'Lucy' ,age:27 ,desn:'sales'},
  //            {name:'Naveen' ,age:21 ,desn:'manager'},
  //            {name:'Bapu' ,age:31 ,desn:'tester'},];
  f1(){
    console.log('this is f1')
  }

  recievedatafromChild(name:string){
    this.myName=name;
  }
}
