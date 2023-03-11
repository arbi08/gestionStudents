import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetallStudentComponent } from './compponents/student/getall-student/getall-student.component';
import { PagenotfoundComponent } from './compponents/student/pagenotfound/pagenotfound.component';
import { AddStudentComponent } from './compponents/student/add-student/add-student.component';
import { EditStudentComponent } from './compponents/student/edit-student/edit-student.component';
import { DetaitStudentComponent } from './compponents/student/detait-student/detait-student.component';
import { DeleteStudentComponent } from './compponents/student/delete-student/delete-student.component';

const routes: Routes = [
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  { path: 'students', children: [
    { path: '', component:  GetallStudentComponent},
    { path: ':id/detail', component:  DetaitStudentComponent},
    { path: 'add', component:  AddStudentComponent},
    { path: ':id/edit', component:  EditStudentComponent},
    { path: ':id/delete', component:  DeleteStudentComponent},
    { path: '**', component: PagenotfoundComponent }, 
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
