import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../interfaces/student';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  message: string = '';
  constructor(private http: HttpClient) { }

  setMessage(message: string){
    this.message = message;
  }
  getMessage(){
    return this.message;
  }
  getAll(): Observable<Student[]> {
    return this.http.get<Student[]>(environment.baseApi+'students');
  }

  getOne(id: number): Observable<any> {
    return this.http.get<Student[]>(environment.baseApi+'student/'+id);
  }

  add(student: Student): Observable<Student> {
    return this.http.post<Student>(environment.baseApi+'students', student);
  }

  update(student: Student): Observable<Student> {
    return this.http.put<Student>(environment.baseApi+'student/'+student.id+'/update', student);
  }

  delete(student: Student): Observable<Student> {
    return this.http.delete<Student>(environment.baseApi+'student/'+student.id+'/delete');
  }
}
