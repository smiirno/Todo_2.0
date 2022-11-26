import {updateNote} from '../notes_slice'
import notesReducer from '../notes_slice'
import {INote} from "../../interfaces/interfaces";


const updatedNote: INote = {
    id: 2,
    title: 'test_c',
    todos: [
        {id: 0, title: 'Тестовая задача', isDone: false, noteId: 2}
    ]
}

const notes: INote[] = [
    {id: 0, title: 'test_a', todos: []},
    {id: 1, title: 'test_b', todos: []},
    {id: 2, title: 'test_c', todos: []},
    {id: 3, title: 'test_d', todos: []},
    {id: 4, title: 'test_e', todos: []},
    {id: 5, title: 'test_f', todos: []},
]

describe('Тесты updateNote', () => {

    test('Корректное значение', () => {
        expect(notesReducer({notes: notes}, updateNote(updatedNote))).toStrictEqual({
            notes: [
                {id: 0, title: 'test_a', todos: []},
                {id: 1, title: 'test_b', todos: []},
                updatedNote,
                {id: 3, title: 'test_d', todos: []},
                {id: 4, title: 'test_e', todos: []},
                {id: 5, title: 'test_f', todos: []},
            ]
        })
    })

})