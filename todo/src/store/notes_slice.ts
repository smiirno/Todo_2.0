import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {INote, ITodo} from "../interfaces/interfaces";


interface NotesState {
    notes: INote[]
}

const initialState: NotesState = {
    notes: []
}

export const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNote (state, action: PayloadAction<INote>) {
            state.notes.push(action.payload)
        },
        addTodo (state, action: PayloadAction<ITodo>) {
            const index = state.notes.findIndex(note => note.id === action.payload.noteId)
            state.notes[index].todos.push(action.payload)
        },
        removeNote (state, action: PayloadAction<string | undefined>) {
            state.notes = state.notes.filter(note => note.id !== action.payload)
        },
        updateNote (state, action: PayloadAction<INote>) {
            let index = state.notes.findIndex(note => note.id === action.payload.id)
            state.notes[index] = action.payload
        }
    }
})

export const {addNote, addTodo, removeNote, updateNote} = notesSlice.actions
export default notesSlice.reducer