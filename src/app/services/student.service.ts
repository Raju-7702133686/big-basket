import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url ="https://62b9299dff109cd1dc8ca34f.mockapi.io/students";

  constructor(private httpClient: HttpClient) { }
  updateStudent(id:any,data:any){
    return this.httpClient.put(this.url+"/"+id,data);
  }
  getStudent(id:any){
    return this.httpClient.get(this.url+"/"+id);
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
