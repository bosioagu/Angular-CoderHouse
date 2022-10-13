import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { InfoCardsComponent } from './components/info-cards/info-cards.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CourseTableComponent } from './components/course-table/course-table.component';
import { BooleanToTextPipe } from './pipes/boolean-to-text.pipe';
import { BooleanStyleDirective } from './directives/boolean-style.directive';
import { NameLastnamePipe } from './pipes/name-lastname.pipe';
import { StudentsTableComponent } from './components/students-table/students-table.component';
import { Font20Directive } from './directives/font20.directive';

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    ToolbarComponent,
    InfoCardsComponent,
    FormComponent,
    CourseTableComponent,
    BooleanToTextPipe,
    BooleanStyleDirective,
    NameLastnamePipe,
    StudentsTableComponent,
    Font20Directive
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
