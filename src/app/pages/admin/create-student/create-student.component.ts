import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss'],
})
export class CreateStudentComponent {
  id: any;
  studentForm: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    batch: new FormControl(),
    male: new FormControl(),
    female: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      mandal: new FormControl(),
      district: new FormControl(),
      state: new FormControl(),
      pincode: new FormControl(),
    }),
    education: new FormArray([]),
    company: new FormGroup({
      name: new FormControl(),
      location: new FormControl(),
      package: new FormControl(),
      offerDate: new FormControl(),
    }),
    sourceType: new FormControl(),
    direct: new FormControl(),
    referral: new FormControl(),
  });

  get educationFormArray() {
    return this.studentForm.get('education') as FormArray;
  }
  addEducation() {
    this.educationFormArray.push(
      new FormGroup({
        qualification: new FormControl(),
        year: new FormControl(),
        percentage: new FormControl(),
      })
    );
  }

  delete(i: number) {
    this.educationFormArray.removeAt(i);
  }
  constructor(
    private studentService: StudentService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((data: any) => {
      this.id = data.id;
      this.studentService.getStudent(this.id).subscribe((data: any) => {
        this.studentForm.patchValue(data);
      });
    });
  }

  submit() {
    console.log(this.studentForm.value);
    if (this.id?.length > 0) {
      this.studentService.updateStudent(this.id, this.studentForm.value).subscribe(
        (data: any) => {
          alert("Student data updated successfully");
          this.router.navigateByUrl("/all-students");
        },
        (err: any) => {
          alert("Student updatation failed")
        }
      )
    
    } else {
      this.studentService.createStudent(this.studentForm.value).subscribe(
        (data) => {
          alert('Student data created successfully');
        },
        (errors: any) => {
          alert('student creation failed');
        }
      );
    }
  }
}
