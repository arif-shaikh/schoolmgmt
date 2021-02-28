import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SchoolManagerAppComponent } from './schoolmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SchoolService } from './services/school.service';
import { HttpClientModule } from '@angular/common/http';
import { CommentsComponent } from './components/comments/comments.component';
import { NewContactDialogComponent } from './components/new-contact-dialog/new-contact-dialog.component';
import {ImageDisplayComponent} from './components/image-display/image-display.component';
const routes: Routes = [
  {
    path: '', component: SchoolManagerAppComponent,
    children: [
      { path: ':id', component: MainContentComponent },
      { path: '', component: MainContentComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({  
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    SchoolService
  ],
  declarations: [
    SchoolManagerAppComponent, 
    SidenavComponent, 
    MainContentComponent, 
    ToolbarComponent, 
    CommentsComponent, 
    NewContactDialogComponent,
    ImageDisplayComponent ]
})
export class SchoolManagerModule { }
