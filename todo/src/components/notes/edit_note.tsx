import React, {useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/redux";
import {removeNote, updateNote} from "../../store/notes_slice";
import {Button, TextField} from "@mui/material";
import './edit_note.css'


const EditNote = () => {

    const {id} = useParams()
    const dispatch = useAppDispatch()
    const {notes} = useAppSelector(state => state.notesReducer)

    const {...note} = notes.find(note => note.id === id)

    const [value, setValue] = useState<string>(note.title);

    const clickRemoveHandler = () => {
        dispatch(removeNote(id))
    }

    const changeHandler = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const updatedNote = {
            id: id,
            title: value,
            todos: [],
            isDone: false
        }
        dispatch(updateNote(updatedNote))
        setValue('')
    }

    return (
        <div className={'edit_note'}>
            <form onSubmit={event => submitHandler(event)}>
                <TextField type={'text'} defaultValue={value} variant="standard" fullWidth onChange={event => changeHandler(event)}/>
                <TextField type={'text'} variant="standard" placeholder={'Введите задачу'}/>
                <Button type={'submit'}>Сохранить изменения</Button>
                <Link to={'/'} onClick={clickRemoveHandler}><Button>Удалить заметку</Button></Link>
            </form>

        </div>
    );
};

export default EditNote;
