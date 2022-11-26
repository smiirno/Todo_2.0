import {ITodo} from "../interfaces/interfaces";

export const createTodo = (id: number, title: string, noteId: number) => {
    const todo: ITodo = {
        id: id,
        title: title,
        isDone: false,
        noteId: noteId
    }
    return todo
}