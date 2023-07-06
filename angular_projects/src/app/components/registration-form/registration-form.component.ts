import { Component } from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {

gender:any;
  // user={firstname:'lity' ,lastname:'sahoo',email:'lity@gmail.com'};
  
  submitForm(form: any){
    console.log(form.value);
  }
}
