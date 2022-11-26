import {createNote} from "./create_note";


describe('Тесты createNote', () => {

    test('Пустые значения title и todos', () => {
        expect(createNote('', [], 0))
            .toStrictEqual({id: 0, title: '', todos: [], isDone: false})
    })

    test('Корректные значение', () => {
        expect(createNote('Тестовая заметка', [{id: 0, title: 'Тестовая задача', noteId: 0, isDone: false}], 0))
            .toStrictEqual({id: 0, title: 'Тестовая заметка', todos: [{id: 0, title: 'Тестовая задача', noteId: 0, isDone: false}], isDone: false})
    })

})