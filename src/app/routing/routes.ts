import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { CourseListComponent } from '../course-list/course-list.component';
import { ContactComponent } from '../contact/contact.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'courselist', component: CourseListComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];