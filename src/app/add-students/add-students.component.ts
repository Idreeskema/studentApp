import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ComponentRestrictions } from 'ngx-google-places-autocomplete/objects/options/componentRestrictions';
import { Options } from 'ngx-google-places-autocomplete/objects/options/options';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.scss'],
})
export class AddStudentsComponent implements OnInit {
  @ViewChild('placesRef') placesRef: GooglePlaceDirective | undefined;

  constructor(
    private addstu: DataService,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private route: Router,
    private activatedroute: ActivatedRoute
  ) {}
  public addStudent!: FormGroup;
  message: string = 'Data added Sucessfully';
  numberRegEx = /\-?\d*\.?\d{1,10}/;
  numberRegExm = /\-?\d*\.?\d{1,10}/;
  editStudent!: FormGroup;
  id: any;
  isAddMode: boolean = false;
  addButton:string="Add ";
  updateButton:string='update'
  addTitle:string='Add Student';
  updateTitle:string='Update Student'


  ngOnInit(): void {
    this.id = this.activatedroute.snapshot.params['id'];
    this.isAddMode = !this.id;

    this.addStudent = new FormGroup({
      id: new FormControl('', [
        Validators.required,
        Validators.maxLength(3),
        Validators.pattern(this.numberRegEx),
      ]),
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^[0-9a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'
        ),
      ]),
      mobile: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
      ]),
      address: new FormControl('', [Validators.required]),
    });
    console.warn(this.activatedroute.snapshot.params['id']);
    this.addstu
      .getdata(this.activatedroute.snapshot.params['id'])
      .subscribe((result: any) => {
        console.log('result', result);
        let data: any = result;
        console.log('single user', data);
        // this.editRestro?.get('name')?.setValue(data.name);
        this.addStudent = new FormGroup({

          id: new FormControl(data['id']),
          name: new FormControl(data['name']),
          address: new FormControl(data['address']),
          email: new FormControl(data['email']),
          mobile: new FormControl(data['mobile']),
        });
      });
  }
  componentRestrictions?: ComponentRestrictions;
  formattedAddress = '';
  option: any | Options;
  autocomplete: any;
  options = {
    componentRestrictions: {
      country: ['IN'],
    },
  } as unknown as Options;
  public handleAddressChange(address: any) {
    // Do some stuff
    const add = address.address_components[2].short_name;
    //address_components[0].short_name
    console.log(add);

    this.formattedAddress =
      address.formatted_address.address_components[2].short_name;
    console.log(address.formatted_address);
    this.addStudent.patchValue({
      address: this.formattedAddress,
    });
    // this.autocomplete.addListener('place_changed', fillInAddress);
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.addStudent.controls[controlName].hasError(errorName);
  };
  submit() {
    if (this.isAddMode) {
      this.add();
    } else {
      this.update();
    }
  }
  add() {
    // if (this.addStudent.value) {
      this.addButton;
    console.log(this.addStudent.value);
    this.addstu.addData(this.addStudent.value).subscribe((data) => {
      console.log('added new data', data);
      this.openSnackbar('Data Added Sucessfully', 'Ok');
    });
    //}
  }
  update() {
    console.log(this.addStudent.value);
    this.addstu
      .updateStudent(
        this.activatedroute.snapshot.params['id'],
        this.addStudent.value
      )
      .subscribe((result: any) => {
        console.log('updates dated', result);
        this.route.navigate(['/', 'Lists']);
        this.openSnackbar('Data Updated Sucessfully', 'Ok');
      });
  }
  public myError = (controlName: string, errorName: string) => {
    return this.addStudent.controls[controlName].hasError(errorName);
  };

  openSnackbar(message: any, action: any): void {
    let _snackBarref = this._snackBar.open(message, action);
    _snackBarref.afterDismissed().subscribe(() => {
      this.addStudent.reset();
    });
  }
  // collection() {
  //   console.log(this.editStudent.value);
  //   this.addstu
  //     .updateStudent(
  //       this.activatedroute.snapshot.params['id'],
  //       this.editStudent.value
  //     )
  //     .subscribe((result: any) => {
  //       console.log(result);
  //       this.route.navigate(['/', 'Lists']);
  //     });
  // }
}
function fillInAddress(arg0: string, fillInAddress: any) {
  throw new Error('Function not implemented.');
}
