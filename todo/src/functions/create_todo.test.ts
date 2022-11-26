import {createTodo} from "./create_todo";


describe('Тесты createTodo', () => {

    test('Пустое значение title', () => {
        expect(createTodo(0, '', 0))
            .toStrictEqual({id: 0, title: '', isDone: false, noteId: 0})
    })

    test('Корректные значение', () => {
        expect(createTodo(3, 'Тестовая задача', 2))
            .toStrictEqual({id: 3, title: 'Тестовая задача', isDone: false, noteId: 2})
    })

})