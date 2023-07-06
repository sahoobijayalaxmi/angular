import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {


  a: number = 6;
  dayNumber: number = new Date().getDay();
  cities: string[] = ['Mumbai', 'Chennai', 'Delhi', 'Pune', 'Hyderabad'];
  charge: number = 75;
  employees = [
    { eId: 101, name: 'sanjay', sal: 5000 },
    { eId: 104, name: 'deepak', sal: 8000 },
    { eId: 103, name: 'sameer', sal: 7000 },
    { eId: 102, name: 'manoj', sal: 9000 },
  ];
  addEmployee() {
    this.employees = [
      { eId: 101, name: 'sanjay', sal: 5000 },
      { eId: 104, name: 'deepak', sal: 8000 },
      { eId: 103, name: 'sameer', sal: 7000 },
      { eId: 102, name: 'manoj', sal: 9000 },
      { eId: 106, name: 'sanjay', sal: 8500 },
    ];
  }
  trackByEmpId(employee: any) {
    return employee.eId;
  }


  myBlue = { color: 'blue' };
  myRed = { color: 'red' };

  getClass() {
    if (this.charge>= 50) {
      return 'high';
    } else if (this.charge >= 20) {
      return 'medium';
    } else {
      return 'low';
    }
  }
}
