import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven1',
  templateUrl: './template-driven1.component.html',
  styleUrls: ['./template-driven1.component.css']
})
export class TemplateDriven1Component {

  user={firstname:'lity' ,lastname:'sahoo',email:'lity@gmail.com'};
  submitForm(formdata:any){
   console.log(formdata);
  }

  resetForm(myform:any){
    myform.resetForm();
  }
}
