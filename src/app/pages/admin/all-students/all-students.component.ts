import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.scss']
})
export class AllStudentsComponent {
  students:any[]=[];
  serch:any;
  constructor(private studentService: StudentService, private router: Router){
    this.studentService.getStudents().subscribe(
      (data:any)=>{
        this.students=data;
      },
      (error:any)=>{
        alert("Error in getting students");
      }
    )
  }

getFilteredStudents(){
  this.studentService.getFilteredStudents(this.serch).subscribe(
    (data:any)=>{
      this.students=data;
    }
  )
}
editStudent(id:any){
  this.router.navigateByUrl("/create-student/"+id)
  
}

deleteSudent(id:any){
  this.studentService.deleteStudent(id).subscribe(
    (data:any)=>{
      alert("Student deleted successfully");
      location.reload();
    },
    (error:any)=>{
      alert("Error in deleting student");
    }
  )
}



}
