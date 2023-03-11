import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  studentForm!: FormGroup;
  
  constructor(private studentService:StudentService,private router: Router) {
    this.createForm();
  }
  ngOnInit(): void {
  }
  
  createForm() {
    this.studentForm = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      Datebirthday: new FormControl('', Validators.required)
    });
  }

  OnAdd() {
    this.studentService.add(this.studentForm.value).subscribe((Response) => {
      this.studentService.setMessage('added student successfully');
      this.router.navigate(['/']);
    }, (error) => {
      console.log(error);
    })
  }
}
