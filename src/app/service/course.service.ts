import { Injectable } from '@angular/core';
import { Course, COURSES } from '../shared/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getCourses(): Course[] {
    return COURSES;
  }

  getCourse(id: string): Course {
    return COURSES.filter((course) => (course.id === id))[0];
  }
}
