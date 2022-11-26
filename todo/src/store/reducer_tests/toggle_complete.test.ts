import {toggleComplete} from '../notes_slice'
import notesReducer from '../notes_slice'
import {INote, ITodo} from "../../interfaces/interfaces";

const todo: ITodo = {
    id: 0,
    title: 'Тестовая задача',
    isDone: false,
    noteId: 3
}

const notes: INote[] = [
    {id: 0, title: 'test_a', todos: []},
    {id: 1, title: 'test_b', todos: []},
    {id: 2, title: 'test_c', todos: []},
    {id: 3, title: 'test_d', todos: [todo]},
    {id: 4, title: 'test_e', todos: []},
    {id: 5, title: 'test_f', todos: []},
]


describe('Тесты toggleComplete', () => {

    test('Корректное значение isDOne: false', () => {
        expect(notesReducer({notes: notes}, toggleComplete(todo))).toStrictEqual({
            notes: [
                {id: 0, title: 'test_a', todos: []},
                {id: 1, title: 'test_b', todos: []},
                {id: 2, title: 'test_c', todos: []},
                {id: 3, title: 'test_d', todos: [{...todo, isDone: true}]},
                {id: 4, title: 'test_e', todos: []},
                {id: 5, title: 'test_f', todos: []},
            ]
        })
    })

})