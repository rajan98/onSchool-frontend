import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { CourseListComponent } from '../course-list/course-list.component';
import { ContactComponent } from '../contact/contact.component';
import { TeacherComponent } from '../teacher/teacher.component';
import { StudentComponent } from '../student/student.component';
import { CoursePageComponent } from '../course-page/course-page.component'

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'courselist', component: CourseListComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'teacher', component: TeacherComponent },
  { path: 'student', component: StudentComponent },
  { path: 'coursepage/:id', component: CoursePageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];