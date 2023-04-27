import { Component} from '@angular/core';
import { DemoService } from 'src/app/servece/task.service';
import {FormGroup,FormControl, Validators}  from '@angular/forms'

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {

  constructor( public myservce:DemoService){}
 
  add(name:any,phone:any){
    // if(!this.NameValid && !this.PhoneValid ){
    let newstudent = {name,phone};
    this.myservce.adduser(newstudent).subscribe();
  // }
}
  myvalidation = new FormGroup ({
    name : new FormControl("",[Validators.required,Validators.max(20),Validators.min(3)]),
    phone : new FormControl("",[Validators.required,Validators.max(11)])
  })
  get NameValid(){
    return this.myvalidation.controls["name"].valid
  }
  get PhoneValid(){
    return this.myvalidation.controls["phone"].valid
  }
}

