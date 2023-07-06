import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  employees: any=[];

  getAllEmployees(){
    this.employees=this.employeeservice.getAllEmployees();
  }
  getMaleEmployees(){
    this.employees=this.employeeservice.getMaleEmployees();
  }
  getFemaleEmployees(){
    this.employees=this.employeeservice.getFemaleEmployees();
  }
  constructor(private employeeservice:EmployeeService){

  }

  
}
