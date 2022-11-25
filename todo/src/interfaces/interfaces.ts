export interface INote {
    id: number,
    title: string,
    todos: ITodo[],
    isDone: boolean
}

export interface ITodo {
    id: number,
    title: string,
    isDone: boolean,
    noteId: number
}