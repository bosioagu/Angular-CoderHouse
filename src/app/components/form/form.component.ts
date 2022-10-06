import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  alertStudent: boolean;
  nameUser: string;
  cellNumber: string | null | undefined;
  languajeSelect: any[] | undefined;


  @Output() addUsuario: EventEmitter<any> = new EventEmitter<any>();

  form = this.formBuilder.group({
    name: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    cellPhoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    languagePrefer: new FormArray([new FormControl()])
  });
  
  constructor(
    private formBuilder: FormBuilder
  ) {
    this.alertStudent = false;
    this.nameUser = "";
    this.cellNumber = "";
    this.languajeSelect = [];
   }

  ngOnInit(): void {
  }

  submitForm(): void {
    console.log(this.form.value);
    this.addUsuario.emit(this.form.value);

    let strUser = "El ultimo estudiante en ingresar al curso es " + this.form.value.name + " " + this.form.value.lastname + " y está buscando perfeccionarse en " + this.form.value.languagePrefer
    this.nameUser = this.form.value.name + " " + this.form.value.lastname
    this.cellNumber = this.form.value.cellPhoneNumber
    this.languajeSelect = this.form.value.languagePrefer
    console.log(strUser)
    this.alertStudent = true;
  }

  get languagePrefer(): FormArray {
    return this.form.get('languagePrefer') as FormArray;
  }

  agregarHabilidad(): void {
    this.languagePrefer.push(new FormControl());
  }
  
  close(){
    this.alertStudent = false;
  }
}
