import React, {useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/redux";
import {addTodo, doneTodo, removeNote, updateNote} from "../../store/notes_slice";
import {Button, Checkbox, TextField} from "@mui/material";
import './edit_note.css'
import {INote, ITodo} from "../../interfaces/interfaces";
import EditTodo from "./edit_todo";
import ModalWindow from "../modal/modal_window";
import SaveIcon from '@mui/icons-material/Save';


const btnStyle = {
    backgroundColor: '#469597',
    color: '#DDBEAA',
}

const EditNote = (note: INote) => {

    const dispatch = useAppDispatch()

    const [valueNote, setValueNote] = useState<string>(note.title);
    const [valueTodo, setValueTodo] = useState<string>('');

    const changeHandler = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        if (event.currentTarget.id === 'note') {
            setValueNote(event.currentTarget.value)
        } else {
            setValueTodo(event.currentTarget.value)
        }
    }

    const addTodoHandler = () => {
        const todo: ITodo = {
            id: note.todos.length.toString(),
            title: valueTodo,
            isDone: false,
            noteId: note.id
        }
        dispatch(addTodo(todo))
        setValueTodo('')
    }

    const removeNoteHandler = () => {
        dispatch(removeNote(note.id))
    }

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const copy = Object.assign(note)
        const updatedNote: INote = {
            id: copy.id,
            title: valueNote,
            todos: copy.todos,
            isDone: false
        }
        dispatch(updateNote(updatedNote))
    }

    return(
        <div className={'edit_form'}>
            <form onSubmit={event => submitHandler(event)}>
                <TextField type={'text'} id={'note'} variant={'standard'} defaultValue={valueNote} fullWidth margin={'dense'}
                           onChange={event => changeHandler(event)}/>
                <div className={'add_todo_container'}>
                    <TextField type={'text'} id={'todo'} variant={'standard'} label={'Задача'} fullWidth margin={'dense'}
                               value={valueTodo} onChange={event => changeHandler(event)}/>
                    <Button onClick={addTodoHandler}>Добавить</Button>
                </div>
                <div className={'note_btn_group'}>
                    <Button type={'submit'} sx={btnStyle} variant="contained" startIcon={<SaveIcon />}>Сохранить</Button>
                    <ModalWindow btnTitle={'Удалить заметку'}>
                        <div>
                            <h4>Подтвердите удаление заметки</h4>
                            <div>
                                <Button onClick={removeNoteHandler}>Подтверждаю</Button>
                            </div>
                        </div>
                    </ModalWindow>
                </div>
            </form>
            <br/>
            <h4>Существующие задачи:</h4>
            <ul>
                {note.todos.map((todo) => {
                    return <EditTodo key={todo.id} {...todo}/>
                })}
            </ul>
        </div>
    )
};

export default EditNote;
