import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/interfaces/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  student: Student = {
    firstname: '', lastname: '', Datebirthday: 0, email: '',
  }
  constructor(private router: Router, private studentService: StudentService) {

  }
  ngOnInit(): void {
  }

  OnAdd() {
    this.studentService.add(this.student).subscribe((Response) => {
      this.student = {
        firstname: '', lastname: '', Datebirthday: 0, email: '',
      }
      this.studentService.setMessage('added student successfully');
      this.router.navigate(['/']);
    }, (error) => {
      console.log(error);
    })
  }
}
