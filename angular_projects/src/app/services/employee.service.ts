import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  private employees=[
    {id:101,name:'lity' ,sal:5000,gender:'female'},
    {id:102,name:'lucy' ,sal:7000,gender:'female'},
    {id:103,name:'bapu' ,sal:9000,gender:'male'},
    {id:104,name:'naveen' ,sal:15000,gender:'male'},
  ]
  getAllEmployees(){
    return this.employees;
  }
  getMaleEmployees(){
    return this.employees.filter((emp)=>emp.gender==='male');
  }
  getFemaleEmployees(){
    return this.employees.filter((emp)=>emp.gender==='female');
  }

  addEmployee(emp:any){
    return this.employees.push(emp);
  }
}
