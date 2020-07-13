import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NoteContentComponent } from '../note-content/note-content.component';
import { FilterPipe } from '../search-filter.pipe';
import { HighlightDirective } from '../highlight.directive';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent,
    NoteContentComponent,
    FilterPipe,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
