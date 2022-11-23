import React, {useEffect, useState} from 'react';
import {Button, TextField} from "@mui/material";
import './note_form.css'
import {useAppDispatch, useAppSelector} from "../../store/redux";
import {addNote} from "../../store/notes_slice";
import {ITodo} from "../../interfaces/interfaces";
import {createNote} from "../../functions/createNote";


const NoteForm = () => {

    const [valueNote, setValueNote] = useState<string>('');
    const [valueTodo, setValueTodo] = useState<string>('');
    const [disableBtn, setDisableBtn] = useState(true);
    const [todos, setTodos] = useState<ITodo[]>([]);


    const {notes} = useAppSelector(state => state.notesReducer)
    const noteId = notes.length.toString()
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (valueNote !== '') {
            setDisableBtn(false)
        } else {
            setDisableBtn(true)
        }
    }, [valueNote]);


    const changeHandler = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        if (event.currentTarget.id === 'note') {
            setValueNote(event.currentTarget.value)
        }
        else {
            setValueTodo(event.currentTarget.value)
        }
    }

    const addTodoHandler = () => {
        const copy = Object.assign([], todos)
        const newTodo: ITodo = {
            id: todos.length.toString(),
            title: valueTodo,
            isDone: false,
            noteId: noteId
        }
        copy.push(newTodo)
        setTodos(copy)
        setValueTodo('')
    }

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (todos.length === 0) {
            console.log(todos)
            setTodos([{id: '0', title: valueTodo, noteId: noteId, isDone: false}])
            console.log(todos)
        }
        const note = createNote(valueNote, todos, noteId)
        dispatch(addNote(note))
        setValueNote('')
        setValueTodo('')
        setTodos([])
    }

    return (
        <form onSubmit={event => submitHandler(event)} className={'note_form'}>
            <TextField type={'text'} id={'note'} label="Название заметки" variant="standard" autoFocus fullWidth margin={'normal'}
                       value={valueNote} onChange={event => changeHandler(event)} />
            <div style={{display: "flex", alignItems: "flex-end"}}>
                <TextField type={'text'} id={'todo'} label="Задача" variant={'standard'} fullWidth
                           value={valueTodo} onChange={event => changeHandler(event)}/>
                <Button onClick={addTodoHandler}>Добавить</Button>
            </div>
            {todos.map((todo) => {
                return <h4 key={todo.id}>{todo.title}</h4>
            })}
            <Button type={'submit'} disabled={disableBtn}>Сохранить</Button>

        </form>
    );
};

export default NoteForm;
