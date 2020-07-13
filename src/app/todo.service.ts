import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  isEdit: any;
  note: any;
  constructor() { }

  setIsEdit(value) {
    this.isEdit = value;
  }

  getIsEdit() {
    return this.isEdit;
  }

  setSelectedNote(data) {
    this.note = data;
  }

  getSeletedNote() {
    return this.note;
  }

}
