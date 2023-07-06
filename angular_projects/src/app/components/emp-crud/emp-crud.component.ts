import { Component,OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmpService } from 'src/app/services/emp.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-emp-crud',
  templateUrl: './emp-crud.component.html',
  styleUrls: ['./emp-crud.component.css']
})
export class EmpCrudComponent implements OnInit{
employees:Employee[]=[];
  constructor( private empservice:EmpService){

  }

  ngOnInit():void{
    this.getEmployees();
     
  }
  getEmployees(){
    this.empservice.getAllEmployees().subscribe((response:Employee[])=>{
      this.employees=response;
      // console.log(response);
     });
  }

  addEmp(id: any,firstName: any,lastName: any,email: any,salary: any){
    const newEmp={id,firstName,lastName,email,salary}
    this.empservice.addEmployee(newEmp).subscribe((response:any)=>{
      this.getEmployees();
      Swal.fire('employee added successful');
    })
  }

  deleteEmp(id:any){
    const flag=confirm('are u sure u want to delete');
    if(flag){
      this.empservice.deleteEmployee(id).subscribe((response:any)=>{
        Swal.fire('great' ,`Employee ${id} deleted successfully`);
        this.getEmployees();
      })
    }
  }
}
