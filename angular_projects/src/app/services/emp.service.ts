import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  apiurl: string=' http://localhost:3000/employee';

  constructor( private httpclient:HttpClient) { }


  getAllEmployees():Observable<Employee[]>{
    return this.httpclient.get<Employee[]>(this.apiurl);
   
  }

  addEmployee(empObj:any){
    return this.httpclient.post(this.apiurl,empObj);
  }
  deleteEmployee(id:any){
   return  this.httpclient.delete(`${this.apiurl}/${id}`);
  }
}
