import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoService } from 'src/app/servece/task.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
id=0
student:any
  constructor(myactive:ActivatedRoute , public service:DemoService){
    this.id = myactive.snapshot.params['id'];
    }
      ngOnInit(): void {
        // throw new Error('Method not implemented.');
        this.service.getuserbyid(this.id).subscribe(
          {
            next:(data)=>{
              console.log(data);
              this.student=data;
            },
            error:(err)=>{
              console.log(err);
            },
          }
        )
      }
    }


