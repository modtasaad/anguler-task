import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './component/students/students.component';
import { StudentDetailsComponent } from './component/student-details/student-details.component';
import { AddStudentComponent } from './component/add-student/add-student.component';
import { HeaderComponent } from './component/header/header.component';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; 

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentDetailsComponent,
    AddStudentComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // NgModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
