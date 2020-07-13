import { ADD_NOTE, DELETE_NOTE, STATIC_NOTES, SELECT_NOTE, EDIT_NOTE } from './constants';

export interface Notes {
    id: number;
    title: string;
    description: string;
    date: any;
    selected: boolean;
}

export interface IAppState {
    notes: Notes[];
}
export const INITIAL_STATE: IAppState = {
    notes: STATIC_NOTES,
};

export function rootReducer(state: IAppState, action): IAppState {
    switch (action.type) {
        case ADD_NOTE:
            if (state.notes.length) { state.notes.forEach(element => { element.selected = false; }); }
            action.note.id = state.notes.length + 1;
            return Object.assign({}, state, {
                notes: state.notes.concat(Object.assign({}, action.note))
            });

        case DELETE_NOTE:
            if (state.notes[state.notes.length - 1].id === action.id) {
                state.notes[state.notes.length - 2].selected = true;
            } else {
                state.notes[state.notes.length - 1].selected = true;
            }
            return Object.assign({}, state, {
                notes: state.notes.filter(n => n.id !== action.id)
            });

        case SELECT_NOTE:
            state.notes.forEach(element => { element.selected = false; });
            const note = state.notes.find(n => n.id === action.id);
            const index = state.notes.indexOf(note);
            return Object.assign({}, state, {
                notes: [
                    ...state.notes.slice(0, index),
                    Object.assign({}, note, { selected: true }),
                    ...state.notes.slice(index + 1),
                ]
            });

        case EDIT_NOTE:
            // state.notes.forEach(element => { element.selected = false; });
            const sNote = state.notes.find(n => n.id === action.selectedNote.id);
            const sIndex = state.notes.indexOf(sNote);
            return Object.assign({}, state, {
                notes: [
                    ...state.notes.slice(0, sIndex),
                    Object.assign({}, sNote, { title: action.selectedNote.title }),
                    ...state.notes.slice(sIndex + 1),
                ]
            });
    }
    return state;
}
