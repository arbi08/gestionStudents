import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/interfaces/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {
  student: Student = {
    id: 0,
    firstname: '', lastname: '', Datebirthday: 0, email: '',
  }
  constructor(private router: Router, private route: ActivatedRoute, private studentService: StudentService) {

  }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.studentService.getOne(id).subscribe(data => {
      this.student = data;
    });
  }

  OnEdit() {
    this.studentService.update(this.student).subscribe((Response) => {
      this.studentService.setMessage('update student successfully');
      this.router.navigate(['/']);
    }, (error) => {
      console.log(error);
    })
  }
}
