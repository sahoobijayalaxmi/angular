import { Component } from '@angular/core';
import Swal from 'sweetalert2'



@Component({
  selector: 'app-emp-data',
  templateUrl: './emp-data.component.html',
  styleUrls: ['./emp-data.component.css']
})
export class EmpDataComponent {

  // employees=[
  //   {"id":1,"name":'lity' , 'salary':5000},
  //   {"id":2,"name":'lucy' , 'salary':7000},
  //   {"id":3,"name":'naveen' , 'salary':9000},
  //   {"id":4,"name":'Ally' , 'salary':11000},
    
  // ]
  

  // selectedEmployee: any={};
  // display:any;
  
 



  // addUser(id: any, name: any, salary: any){
  
  //     let newUser = { id, name, salary };
  //     this.employees.push(newUser);
   
   
  // }
  // addEmp(id: any, name: any, salary: any) {
  //   if (id && name && salary) {
  //     let newEmp = { id, name, salary };
  //     this.employees.push(newEmp);
  //   } else {
  //     alert('Please fill the form');
  //   }
  //   Swal.fire('Hey','A new employee record added successfully');
  // }
   

  // viewEmp(employee:any){
  //   this.selectedEmployee=employee;
  //  this.openModalDialog();
  // }
  // openModalDialog(){
  //   this.display='block';
  // }
  // closeModalDialog(){
  //   this.display='none';
  // }


  // deleteemp(i:any){
  //   this.employees.splice(i,1);
  //   Swal.fire('Are you sure?', 'You wont be able to revert this!', 'warning');
  // }


  // class Array and varibale declaration part----------------
  empDtl = [{ eId: '001', eName: 'Ally', eSal: 5000 },
            { eId: '002', eName: 'lity', eSal: 7000 },
            { eId: '003', eName: 'lucy', eSal: 10000 },
            { eId: '004', eName: 'Naveen', eSal: 15000 }];

  bln: boolean = false;
  selectedEmp: any = {};
  btnSave_Update: string = '';
  lblEmployee:string='';
  eId: any;
  eName: any;
  eSal: any;
//----------------------------

// Methods--------------------
  empView(emp: any) {
    this.selectedEmp = emp;
  }

  empEdit(emp: any) {
    this.bln = true;
    this.selectedEmp = emp;
    this.eId = emp.eId;
    this.eName = emp.eName;
    this.eSal = emp.eSal;

    this.btnSave_Update = 'Update';
  }

  empSave_Update(employee: any) {
    //debugger

    if (this.btnSave_Update == 'Save') {
      this.empDtl.push({ eId: this.eId, eName: this.eName, eSal: this.eSal });
      Swal.fire('Employee','A new employee record added successfully');
    } else {
      const empInd = this.empDtl.indexOf(employee);

      if (empInd !== -1) {
        this.empDtl[empInd] = { eId: this.eId, eName: this.eName, eSal: this.eSal };
        Swal.fire('Success','Employee record updated successfully');
      }
    }
  }

  empDelete(ind: any) {
    const isConfirmed = confirm('Are you sure! you want to delete.')
    if (isConfirmed) {
      this.empDtl.splice(ind, 1);
      Swal.fire('Deleted', 'Successfully record deleted')
    }
  }

  empNew() {
    this.bln = true;
    this.btnSave_Update = 'Save';
    this.eId = '';
    this.eName = '';
    this.eSal = '';
  }

}

