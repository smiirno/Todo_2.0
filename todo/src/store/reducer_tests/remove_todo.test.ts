import {removeTodo} from '../notes_slice'
import notesReducer from '../notes_slice'
import {INote, ITodo} from "../../interfaces/interfaces";


const todo: ITodo = {
    id: 2,
    title: 'test_c',
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

describe('Тесты removeTodo', () => {

    test('Корректное значение', () => {
        expect(notesReducer({notes: notes}, removeTodo(todo))).toStrictEqual({
            notes: [
                {id: 0, title: 'test_a', todos: [
                        {id: 0, title: 'test_a', isDone: false, noteId: 0},
                        {id: 1, title: 'test_b', isDone: false, noteId: 0},
                        {id: 3, title: 'test_d', isDone: false, noteId: 0},
                        {id: 4, title: 'test_e', isDone: false, noteId: 0}
                    ]}
                ]
        })
    })

    test('Передаем несуществующий id', () => {
        expect(notesReducer({notes: notes}, removeTodo({...todo, id: 10}))).toStrictEqual({
            notes: notes
        })
    })

})