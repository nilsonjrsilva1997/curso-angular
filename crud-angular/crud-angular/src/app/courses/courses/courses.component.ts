import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  displayedColumns: string[] = ['name', 'category'];

  courses: Course[] = [
    { id: "1", name: "Angular", category: "Programação Front End" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
