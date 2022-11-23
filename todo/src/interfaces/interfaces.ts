export interface INote {
    id: string | undefined,
    title: string,
    todos: ITodo[],
    isDone: boolean
}

export interface ITodo {
    id: string,
    title: string,
    isDone: boolean,
    noteId: string
}