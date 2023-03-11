import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddStudentComponent } from './compponents/student/add-student/add-student.component';
import { EditStudentComponent } from './compponents/student/edit-student/edit-student.component';
import { DetaitStudentComponent } from './compponents/student/detait-student/detait-student.component';
import { DeleteStudentComponent } from './compponents/student/delete-student/delete-student.component';
import { GetallStudentComponent } from './compponents/student/getall-student/getall-student.component';
import { PagenotfoundComponent } from './compponents/student/pagenotfound/pagenotfound.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    EditStudentComponent,
    DetaitStudentComponent,
    DeleteStudentComponent,
    GetallStudentComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
