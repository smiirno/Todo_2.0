import {INote, ITodo} from "../interfaces/interfaces";

export const createNote = (title: string, todos: ITodo[], id: string) => {
    const note: INote = {
        id: id,
        title: title,
        todos: todos,
        isDone: false
    }
    return note
}