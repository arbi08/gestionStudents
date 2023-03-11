import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/interfaces/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-getall-student',
  templateUrl: './getall-student.component.html',
  styleUrls: ['./getall-student.component.scss']
})
export class GetallStudentComponent implements OnInit{
  students: Student[] = [];
  lenght: number = 0;
  donnee:string = ''
  constructor(private studentService: StudentService){

  }
  ngOnInit(): void {
    this.getAll();
    setTimeout(()=>{this.donnee = '';},2000);
  }

  getAll(){
    this.donnee = this.studentService.getMessage();
    this.studentService.getAll().subscribe((response:any)=>{this.students=response;},(error)=>{this.lenght=1})
  }

}
