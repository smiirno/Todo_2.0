export interface INote {
    id: number,
    title: string,
    todos: ITodo[]
}

export interface ITodo {
    id: number,
    title: string,
    isDone: boolean,
    noteId: number
}

export interface IPhrase {
    id: number,
    owner: string,
    occupation: string,
    phrase: string
}