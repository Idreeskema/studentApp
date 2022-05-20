import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import { FormGroup, FormControl } from '@angular/forms';
import {DataService} from '../data.service'
@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.scss']
})
export class UpdateStudentComponent implements OnInit {
  
 

  constructor( private router:DataService,private activatedroute:ActivatedRoute ,private rout:Router) { }

  editStudent = new FormGroup({
    id : new FormControl(''),
    name: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
    mobile:new FormControl(''),

  })
  ngOnInit(): void {

    console.warn(this.activatedroute.snapshot.params['id'])
    this.router.getdata(this.activatedroute.snapshot.params['id']).subscribe((result:any)=>{
      console.log("result",result)
      let data:any=result;
     // this.editRestro?.get('name')?.setValue(data.name);
     this.editStudent = new FormGroup({
       id: new FormControl(data['id']),
      name: new FormControl(data['name']),
      address: new FormControl(data['address']),
      email: new FormControl(data['email']),
      mobile: new FormControl(data['mobile'])
    })
    })

   
  }
  collection(){

    console.log(this.editStudent.value)
    this.router.updateStudent(this.activatedroute.snapshot.params['id'],this.editStudent.value).subscribe((result:any)=>{
      console.log(result);
      this.rout.navigate(['/','Lists'])
    })
  }
 
}


