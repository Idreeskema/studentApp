import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {

para ="I believe that every designer should have their own website because in my opinion it's the best way to showcase your design work.  "
  constructor() { }

  ngOnInit(): void {
  }
 data=[
   {"name":"Idrees Kema","Designation":"There are only two hard things in Computer Science: cache invalidation and naming things.","image":"../../assets/photo_1.jpg"},
   {"name":"Bilal Dar","Designation1":"Simple things should be simple, complex things should be possible.","image":"../../assets/bilaldar.jpg"},
   {"name":"Shameem Shah","Designation2":"Any problem in computer science can be solved with another level of indirection.","image":"../../assets/shameem.jpg"}

 ]

 
}
