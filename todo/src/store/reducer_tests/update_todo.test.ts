import {updateTodo} from '../notes_slice'
import notesReducer from '../notes_slice'
import {INote, ITodo} from "../../interfaces/interfaces";


const updatedTodo: ITodo = {
    id: 2,
    title: 'Тестовая задача',
    isDone: false,
    noteId: 0
}

const notes: INote[] = [
    {id: 0, title: 'test_a', todos: [
            {id: 0, title: 'test_a', isDone: false, noteId: 0},
            {id: 1, title: 'test_b', isDone: false, noteId: 0},
            {id: 2, title: 'test_c', isDone: false, noteId: 0},
            {id: 3, title: 'test_d', isDone: false, noteId: 0},
            {id: 4, title: 'test_e', isDone: false, noteId: 0}
        ]}
]

describe('Тесты updateTodo', () => {

    test('Корректное значение', () => {
        expect(notesReducer({notes: notes}, updateTodo(updatedTodo))).toStrictEqual({
            notes: [
                {id: 0, title: 'test_a', todos: [
                        {id: 0, title: 'test_a', isDone: false, noteId: 0},
                        {id: 1, title: 'test_b', isDone: false, noteId: 0},
                        updatedTodo,
                        {id: 3, title: 'test_d', isDone: false, noteId: 0},
                        {id: 4, title: 'test_e', isDone: false, noteId: 0}
                    ]}
            ]
        })
    })

})