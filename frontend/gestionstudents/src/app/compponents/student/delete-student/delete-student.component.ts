import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/interfaces/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.scss']
})
export class DeleteStudentComponent implements OnInit{
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

  OnDelete() {
    this.studentService.delete(this.student).subscribe((Response) => {
      this.studentService.setMessage('deleted student successfully');
      this.router.navigate(['/']);
    }, (error) => {
      console.log(error);
    })
  }
}
