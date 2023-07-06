import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {

  constructor(private employeeservice:EmployeeService){

  }

  addEmployee(id: any,name: any,sal: any,gender: any){
    const newemp={id,name,sal,gender};
    this.employeeservice.addEmployee(newemp)
  }

}
