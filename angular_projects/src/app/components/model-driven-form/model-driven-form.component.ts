import { Component,OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent implements OnInit{
  registerForm: any;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
  //  this.initializemyform();
  this.initializeMyFormUsingFormBuilder();
}
initializeMyFormUsingFormBuilder() {
  this.registerForm = this.formBuilder.group(
    {
      firstName: new FormControl('litysa', [
        Validators.required,
        Validators.minLength(5),
      ]),
      lastName: new FormControl(),
      email: new FormControl('Sachin@gmail.com', [
        Validators.required,
        Validators.email,
      ]),
      address: new FormGroup({
        street: new FormControl(),
        city: new FormControl(),
        pin: new FormControl(123456, [
          Validators.required,
          Validators.pattern('[0-9]{6}'),
        ]),
      }),
    },
    { updateOn: 'blur' }
  );
}


  initializemyform() {
    this.registerForm=new FormGroup({
      firstName: new FormControl('lity',[
        Validators.required,
        Validators.minLength(8),
      ]),
      lastName: new FormControl(),
      email: new FormControl('lity@gmail.com',[
        Validators.required,
        Validators.email,
      ]),
      address: new FormGroup({
        street: new FormControl(),
        city: new FormControl(),
        pin: new FormControl(123456,[
          Validators.required,
          Validators.pattern('[0-9]{6}'),
        ]),
    }),
    });
  }

  submitMyForm(form: any) {
    console.log(form);
  }

  }

