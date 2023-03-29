import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  displayedColumns: string[] = ['name', 'category'];

  courses: Course[] = [];

  constructor(private coursesService: CoursesService) {
      this.courses = this.coursesService.list();
  }

  ngOnInit(): void {
  }

}
