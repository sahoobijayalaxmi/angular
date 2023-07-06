import { Component } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  signin(){
    Swal.fire('Good job!', 'You clicked the button!', 'success');
  }
}
