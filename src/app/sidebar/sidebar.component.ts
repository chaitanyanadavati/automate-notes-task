import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../store';
import { SELECT_NOTE } from '../constants';
import { Observable } from 'rxjs';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {

  noteRef: any;
  @select() notes$: Observable<any>;
  initialId: any;
  @Input() searchText: any;
  isEdit: boolean;

  constructor(private ngRedux: NgRedux<IAppState>, private todoService: TodoService) {
    this.noteRef = this.notes$.subscribe((notes: any) => {
      this.initialId = notes[notes.length - 1].id;
      notes.forEach(note => {
        if (note.selected === true && !this.todoService.getIsEdit()) {
          this.todoService.setSelectedNote(note);
        }
      });
    });
    this.select(this.initialId);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.noteRef) { this.noteRef.unsubscribe(); }
  }

  select(id: number) {
    this.todoService.setIsEdit(false);
    this.ngRedux.dispatch({ type: SELECT_NOTE, id });
  }
}
