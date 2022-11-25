import React, {useState} from 'react';
import {useAppDispatch} from "../../store/redux";
import {addTodo, removeNote, updateNote} from "../../store/notes_slice";
import {INote, ITodo} from "../../interfaces/interfaces";
import EditTodo from "./edit_todo";
import ModalWindow from "../modal/modal_window";
import {Button, IconButton, TextField} from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import {ContainedBtnStyle, IconStyle} from "../../custom_MUI_styles/custom_MUI_styles";
import './edit_note.css'


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
        <div className={'edit-note-form'}>
            <form onSubmit={event => submitHandler(event)}>
                <TextField type={'text'} id={'note'} variant={'standard'} defaultValue={valueNote} fullWidth margin={'dense'}
                           onChange={event => changeHandler(event)}/>

                <div className={'edit-note-form__add-todo__container'}>
                    <TextField type={'text'} id={'todo'} variant={'standard'} label={'Задача'} fullWidth margin={'dense'}
                               value={valueTodo} onChange={event => changeHandler(event)}/>
                    <IconButton onClick={addTodoHandler} title={'Добавить'}>
                        <AddIcon sx={IconStyle}/>
                    </IconButton>
                </div>

                <div className={'edit-note-form__btn-group mt-20'}>
                    <Button type={'submit'} sx={ContainedBtnStyle} variant="contained" startIcon={<SaveIcon />}>Сохранить</Button>
                    <ModalWindow btnTitle={'Удалить заметку'} btnType={'error'}>
                        <div>
                            <h4>Подтвердите удаление заметки</h4>
                            <div style={{marginTop: 20}}>
                                <Button onClick={removeNoteHandler} sx={ContainedBtnStyle} variant="contained" startIcon={<ThumbUpOffAltIcon />}>
                                    Подтверждаю
                                </Button>
                            </div>
                        </div>
                    </ModalWindow>
                </div>
            </form>

            <div className={'mt-20'}>
                <h4>Существующие задачи:</h4>
                <ul>
                    {note.todos.map((todo) => {
                        return <EditTodo key={todo.id} {...todo}/>
                    })}
                </ul>
            </div>

        </div>
    )
};

export default EditNote;
