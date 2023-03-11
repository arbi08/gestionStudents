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
  }

  getAll(){
    this.studentService.getAll().subscribe((response:any)=>{this.students=response;},(error)=>{this.lenght=1})
  }
  checkMessage(): boolean{
    if(this.studentService.getMessage() == ''){
      this.donnee = '';
      return false
    }
    this.donnee = this.studentService.getMessage();
    setTimeout(()=>{window.location.assign('/')},2000);
    return true
  }
}
