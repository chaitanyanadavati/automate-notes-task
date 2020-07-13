import { Component, OnInit } from '@angular/core';
import { IAppState } from '../store';
import { NgRedux } from 'ng2-redux';
import { ADD_NOTE, NEW_NOTE, DELETE_NOTE } from '../constants';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isMenuClose: boolean;
  searchText = '';
  isMobileView: boolean;

  constructor(private ngRedux: NgRedux<IAppState>, private todoService: TodoService) {
    window.addEventListener('resize', () => { this.isMenuClose = window.innerWidth >= 769 ? false : true; }, false);
  }

  ngOnInit() { }

  toggle() {
    this.isMenuClose = !this.isMenuClose;
  }

  create() {
    this.ngRedux.dispatch({ type: ADD_NOTE, note: NEW_NOTE });
  }

  delete() {
    this.ngRedux.dispatch({ type: DELETE_NOTE, id: this.todoService.getSeletedNote().id });
  }

}
