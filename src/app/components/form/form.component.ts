import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, ValidatorFn, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { DataStudents } from 'src/app/data/dataStudent';
import { Student } from 'src/app/interfaces/Student';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  students: Student[] = DataStudents.students;

  newUser : any

  alertStudent: boolean;

  id: number = 0;
  name: string  =  "";
  lastname: string =  "";
  age: number = 0;
  cellPhoneNumber: string | undefined | null =  "";
  username: string =  "";
  password: string =  "";

  @Input () dataSource : any
  @Output() addUsuario: EventEmitter<any> = new EventEmitter<any>();

  form = this.formBuilder.group({
    name: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    cellPhoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    age: ['', [Validators.required]],
    languagePrefer: new FormArray([new FormControl()]),
    
  });
  
  constructor(
    private formBuilder: FormBuilder
  ) {
    this.alertStudent = false;
   }

  ngOnInit(): void {
  }

  submitForm(): void {
    console.log(this.form.value);
    this.addUsuario.emit(this.form.value);
    let id = this.students.length + 1
    let name = this.form.value.name  
    let lastname = this.form.value.lastname  
    let cellPhoneNumber = this.form.value.cellPhoneNumber
    let languagePrefer = this.form.value.languagePrefer
    let username = this.form.value.username
    let password = this.form.value.password
    
    this.alertStudent = true;

    let studentAdd= {
      id: id,
      name: name,
      lastname: lastname,
      age: this.age,
      cellPhoneNumber: cellPhoneNumber,
      languagePrefer: languagePrefer,
      username: username,
      password: password

    }
    this.newUser= studentAdd
    console.log(this.newUser)
    this.addToStudentList()
    this.form.reset()
  }

  addToStudentList(){
 
    this.dataSource=  this.students.push( this.newUser)
    console.log("addToStudentList", this.dataSource)
  }

  get languagePrefer(): FormArray {
    return this.form.get('languagePrefer') as FormArray;
  }

  agregarHabilidad(): void {
    this.languagePrefer.push(new FormControl());
  }
  


}
