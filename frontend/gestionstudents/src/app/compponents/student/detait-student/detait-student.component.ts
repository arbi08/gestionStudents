import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/interfaces/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-detait-student',
  templateUrl: './detait-student.component.html',
  styleUrls: ['./detait-student.component.scss']
})
export class DetaitStudentComponent implements OnInit {
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
}
