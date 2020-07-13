import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EDIT_NOTE } from '../constants';
import { IAppState } from '../store';
import { NgRedux } from 'ng2-redux';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-note-content',
  templateUrl: './note-content.component.html',
  styleUrls: ['./note-content.component.scss']
})
export class NoteContentComponent implements OnInit {
  today: number = Date.now();
  constructor(private ngRedux: NgRedux<IAppState>, private todoService: TodoService) {
    setInterval(() => { this.today = Date.now(); }, 60000);
  }

  ngOnInit() { }

  editSeletedText(title: string) {
    this.todoService.setIsEdit(!title ? false : true);
    const selectedNote = { id: this.todoService.getSeletedNote().id, title: !title ? 'Add Note' : title };
    this.ngRedux.dispatch({ type: EDIT_NOTE, selectedNote });
  }
}
