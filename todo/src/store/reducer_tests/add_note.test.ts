import {addNote} from '../notes_slice'
import notesReducer from '../notes_slice'
import {INote} from "../../interfaces/interfaces";


const newNote: INote = {
    id: 5,
    title: 'test_f',
    todos: [
        {id: 0, title: 'test_a', isDone: false, noteId: 5},
        {id: 1, title: 'test_b', isDone: false, noteId: 5},
        {id: 2, title: 'test_c', isDone: false, noteId: 5},
        {id: 3, title: 'test_d', isDone: false, noteId: 5},
        {id: 4, title: 'test_e', isDone: false, noteId: 5}
    ]
}

const notes: INote[] = [
    {id: 0, title: 'test_a', todos: []},
    {id: 1, title: 'test_b', todos: []},
    {id: 2, title: 'test_c', todos: []},
    {id: 3, title: 'test_d', todos: []},
    {id: 4, title: 'test_e', todos: []},
]

describe('Тесты addTodo', () => {

    test('Корректное значение', () => {
        expect(notesReducer({notes: notes}, addNote(newNote))).toStrictEqual({
            notes: [
                {id: 0, title: 'test_a', isDone: false, todos: []},
                {id: 1, title: 'test_b', isDone: false, todos: []},
                {id: 2, title: 'test_c', isDone: false, todos: []},
                {id: 3, title: 'test_d', isDone: false, todos: []},
                {id: 4, title: 'test_e', isDone: false, todos: []},
                newNote
            ]
        })
    })

})