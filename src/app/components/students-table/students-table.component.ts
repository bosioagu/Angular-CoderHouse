import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/app/interfaces/Student';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.css']
})
export class StudentsTableComponent implements OnInit {

  estudiantes: Student[] = [
    {name: "Francisco", lastname: "Perez", age: 19, course: "Angular", courseLogo: "../../../assets/logos/angular.svg", averageGrade: 10},
    {name: "Esteban", lastname: "Garcia", age: 22, course: "React", courseLogo: "../../../assets/logos/react.svg", averageGrade: 7},
    {name: "Mauricio", lastname: "Fernandez", age: 21, course: "Angular", courseLogo: "../../../assets/logos/angular.svg", averageGrade: 9},
    {name: "Diego", lastname: "Diaz", age: 34, course: "Angular", courseLogo: "../../../assets/logos/angular.svg", averageGrade: 5},
    {name: "Santiago", lastname: "Morales", age: 47, course: "Java", courseLogo: "../../../assets/logos/java.svg", averageGrade: 7}
  ]

  columnas:string[] = [ 'nombre', 'curso', 'edad', 'acciones'];
  dataSoutce: MatTableDataSource<Student> = new MatTableDataSource<Student> (this.estudiantes)
  constructor() { }

  ngOnInit(): void {
  }

  filtrarCurso(event:Event){
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.dataSoutce.filterPredicate = function (estudiantes: Student, filtro: string){
      return estudiantes.course.toLowerCase().includes(filtro.toLowerCase());
    }
    this,this.dataSoutce.filter = valorObtenido.trim().toLowerCase();
  }

  filtrarAlumno(event:Event){
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.dataSoutce.filterPredicate = function (estudiantes: Student, filtro: string){
      return estudiantes.name.toLowerCase().includes(filtro.toLowerCase());
    }
    this,this.dataSoutce.filter = valorObtenido.trim().toLowerCase();
  }

  editar(){
    console.log(this.estudiantes)
  }
}
