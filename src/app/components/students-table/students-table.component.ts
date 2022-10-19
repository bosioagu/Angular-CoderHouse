import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataStudents } from 'src/app/data/dataStudent';
import { Student } from 'src/app/interfaces/Student';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.css']
})
export class StudentsTableComponent implements OnInit {

  students: Student[] = DataStudents.students;
  columnas:string[] = [ 'nombre', 'curso', 'edad', 'acciones'];
  dataSource: MatTableDataSource<Student> = new MatTableDataSource<Student> (this.students);

  constructor() { }

  ngOnInit(): void {
    console.log(this.dataSource)
  }

  filtrarCurso(event:Event){
    const valorObtenido = (event.target as HTMLInputElement).value;
    console.log(valorObtenido)
    this.dataSource.filterPredicate = function (estudiantes: Student, filtro: string){
      return estudiantes.languagePrefer.toLowerCase().includes(filtro.toLowerCase());
    }
    this.dataSource.filter = valorObtenido.trim().toLowerCase();
  }

  filtrarAlumno(event:Event){
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.dataSource.filterPredicate = function (estudiantes: Student, filtro: string){
      let fullname = estudiantes.name + estudiantes.lastname
      return fullname.toLowerCase().includes(filtro.toLowerCase());
    }
    this.dataSource.filter = valorObtenido.trim().toLowerCase();
  }

  editar(){
    console.log(this.students)
  }

  deleteStudent(id : number){
    let position = this.students.findIndex(student => student.id == id)
    this.students.splice(position, 1)
    this.dataSource.data = this.students;
  }
}
