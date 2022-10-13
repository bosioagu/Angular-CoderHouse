import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from 'src/app/interfaces/Curso';

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css']
})
export class CourseTableComponent implements OnInit {
  cursos: Curso[] = [
    {
      nombre: 'Angular',
      comision: "000011",
      profesor: 'Garcia',
      fechaInicio: new Date(2022, 2, 5),
      fechaFin: new Date(2022, 6, 30),
      inscripcionAbierta: true,
      imagen: './assets/logos/angular.svg'
    },
    {
      nombre: 'Angular',
      comision: "000012",
      profesor: 'Perez',
      fechaInicio: new Date(2022, 0, 2),
      fechaFin: new Date(2022, 5, 30),
      inscripcionAbierta: true,
      imagen: './assets/logos/angular.svg'
    },
    {
      nombre: 'React',
      comision: "000021",
      profesor: 'Almada',
      fechaInicio: new Date(2021, 11, 2),
      fechaFin: new Date(2022, 4, 30),
      inscripcionAbierta: false,
      imagen: './assets/logos/react.svg'
    },
    {
      nombre: 'Java',
      comision: "000031",
      profesor: 'Lopez',
      fechaInicio: new Date(2022, 2, 7),
      fechaFin: new Date(2022, 7, 30),
      inscripcionAbierta: false,
      imagen: './assets/logos/java.svg'
    },
  ]

  columnas:string[] = [ 'nombre', 'comision', 'fechaInicio', 'fechaFin', 'inscripcionAbierta', 'acciones'];
  dataSoutce: MatTableDataSource<Curso> = new MatTableDataSource<Curso> (this.cursos)
  constructor() { }

  ngOnInit(): void {
  }

  filtrarCurso(event:Event){
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.dataSoutce.filterPredicate = function (curso: Curso, filtro: string){
      return curso.nombre.toLowerCase().includes(filtro.toLowerCase());
    }
    this,this.dataSoutce.filter = valorObtenido.trim().toLowerCase();
  }

  filtrarComision(event:Event){
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.dataSoutce.filterPredicate = function (curso: Curso, filtro: string){
      return curso.comision.toLowerCase().includes(filtro.toLowerCase());
    }
    this,this.dataSoutce.filter = valorObtenido.trim().toLowerCase();
  }

  editar(){
    console.log(this.cursos)
  }

}
