import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url ="https://62b9299dff109cd1dc8ca34f.mockapi.io/students";

  constructor(private httpClient: HttpClient) { }
  getStudent(id:any):Observable<any>{
    return this.httpClient.get(this.url+"/"+id)
  }
  updateStudent(id:any, data:any):Observable<any>{
    return this.httpClient.put(this.url+"/"+id,data)
  }
  createStudent(data:any){
    return this.httpClient.post(this.url,data);
  }
  getStudents(){
    return this.httpClient.get(this.url);
  }
  getFilteredStudents(serch:any){
    return this.httpClient.get(this.url+"?filter="+serch);
  }
  deleteStudent(id:any){
    return this.httpClient.delete(this.url+"/"+id)
  }
}
