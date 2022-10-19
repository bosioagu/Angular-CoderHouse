import { Component, OnInit } from '@angular/core';
import { DataStudents } from 'src/app/data/dataStudent';
import { Student } from 'src/app/interfaces/Student';

@Component({
  selector: 'app-info-cards',
  templateUrl: './info-cards.component.html',
  styleUrls: ['./info-cards.component.css']
})
export class InfoCardsComponent implements OnInit {

  date: Date = new Date();

  studentsList: Student[] = DataStudents.students;


  constructor() { }

  ngOnInit(): void {
  }

}
