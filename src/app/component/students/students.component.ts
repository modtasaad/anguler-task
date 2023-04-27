import { Component,OnInit } from '@angular/core';
import { DemoService } from 'src/app/servece/task.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent  implements OnInit {
student:any
  constructor( public servce:DemoService){}
  ngOnInit(): void {
        // throw new Error('Method not implemented.');
        this.servce.getallusers().subscribe(
          {
            next:(data)=>{
              console.log(data);
              this.student=data;
            },
            error:(err)=>{console.log(err);
            }
          }
        )
  }


}
