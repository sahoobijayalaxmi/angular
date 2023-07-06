import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  products:any=[];
  constructor(private http:HttpClient){

  }

  ngOnInit(): void{
    let url='https://fakestoreapi.com/products'
    this.http.get(url).subscribe(response =>{
      this.products=response;
      console.log(response);
    })
  }

}
