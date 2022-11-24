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
        doneTodo (state, action: PayloadAction<ITodo>) {
            const indexNote = state.notes.findIndex(note => note.id === action.payload.noteId)
            const indexTodo = state.notes[indexNote].todos.findIndex(todo => todo.id === action.payload.id)
            state.notes[indexNote].todos[indexTodo].isDone = !state.notes[indexNote].todos[indexTodo].isDone
        },
        removeNote (state, action: PayloadAction<string | undefined>) {
            state.notes = state.notes.filter(note => note.id !== action.payload)
        },
        removeTodo (state, action: PayloadAction<ITodo>) {
            const indexNote = state.notes.findIndex(note => note.id === action.payload.noteId)
            state.notes[indexNote].todos = state.notes[indexNote].todos.filter(todo => todo.id !== action.payload.id)
        },
        updateNote (state, action: PayloadAction<INote>) {
            let index = state.notes.findIndex(note => note.id === action.payload.id)
            state.notes[index] = action.payload
        },
        updateTodo (state, action: PayloadAction<ITodo>) {
            const indexNote = state.notes.findIndex(note => note.id === action.payload.noteId)
            const indexTodo = state.notes[indexNote].todos.findIndex(todo => todo.id === action.payload.id)
            state.notes[indexNote].todos[indexTodo].title = action.payload.title
        }
    }
})

export const {addNote, addTodo, doneTodo, removeNote, removeTodo, updateNote, updateTodo} = notesSlice.actions
export default notesSlice.reducer