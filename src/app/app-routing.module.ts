import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './component/students/students.component';
import { StudentDetailsComponent } from './component/student-details/student-details.component';
import { AddStudentComponent } from './component/add-student/add-student.component';

const routes: Routes = [
  {path:"", component:StudentsComponent },
  {path:"student", component:StudentsComponent },
  {path:"student/:id", component:StudentDetailsComponent },
  {path:"add", component:AddStudentComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
