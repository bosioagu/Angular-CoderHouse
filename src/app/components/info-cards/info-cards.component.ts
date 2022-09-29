import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/interfaces/Student';

@Component({
  selector: 'app-info-cards',
  templateUrl: './info-cards.component.html',
  styleUrls: ['./info-cards.component.css']
})
export class InfoCardsComponent implements OnInit {

  date: Date = new Date();

  studentsList: Array<Student> = [
    {name: "Francisco", lastname: "Perez", age: 19, course: "Angular", courseLogo: "../../../assets/logos/angular.svg", averageGrade: 10},
    {name: "Esteban", lastname: "Garcia", age: 22, course: "React", courseLogo: "../../../assets/logos/react.svg", averageGrade: 7},
    {name: "Mauricio", lastname: "Fernandez", age: 21, course: "Angular", courseLogo: "../../../assets/logos/angular.svg", averageGrade: 9},
    {name: "Diego", lastname: "Diaz", age: 34, course: "Angular", courseLogo: "../../../assets/logos/angular.svg", averageGrade: 5},
    {name: "Santiago", lastname: "Morales", age: 47, course: "Java", courseLogo: "../../../assets/logos/java.svg", averageGrade: 7}
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
