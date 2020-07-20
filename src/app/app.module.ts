import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './routing/routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { HomeComponent } from './home/home.component';
import { CourseListComponent } from './course-list/course-list.component';
import { ContactComponent } from './contact/contact.component';
import { CoursePageComponent } from './course-page/course-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TeacherComponent,
    StudentComponent,
    HomeComponent,
    CourseListComponent,
    ContactComponent,
    CoursePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
