import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../store/redux";
import {addNote} from "../../store/notes_slice";
import {ITodo} from "../../interfaces/interfaces";
import {createNote} from "../../functions/createNote";
import {Button, IconButton, TextField} from "@mui/material";
import {ContainedBtnStyle, IconStyle} from "../../custom_MUI_styles/custom_MUI_styles";
import SaveIcon from "@mui/icons-material/Save";
import AddIcon from '@mui/icons-material/Add';
import './create_note_form.css'


const CreateNoteForm = () => {

    const [valueNote, setValueNote] = useState<string>('');
    const [valueTodo, setValueTodo] = useState<string>('');
    const [disableSaveBtn, setDisableSaveBtn] = useState<boolean>(true);
    const [disableAddTodoBtn, setDisableAddTodoBtn] = useState<boolean>(true);
    const [todos, setTodos] = useState<ITodo[]>([]);

    const {notes} = useAppSelector(state => state.notesReducer)
    const noteId = notes.length.toString()
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (valueNote !== '') {
            setDisableSaveBtn(false)
        } else {
            setDisableSaveBtn(true)
        }
        if (valueTodo !== '') {
            setDisableAddTodoBtn(false)
        } else {
            setDisableAddTodoBtn(true)
        }
    }, [valueNote, valueTodo]);


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
            console.log('Сработал if', todos, valueTodo)
            // setTodos([{id: '0', title: valueTodo, noteId: noteId, isDone: false}])
            // addTodoHandler()
            console.log(todos)
        }
        const note = createNote(valueNote, todos, noteId)
        dispatch(addNote(note))
        setValueNote('')
        setValueTodo('')
        setTodos([])
    }

    return (
        <form onSubmit={event => submitHandler(event)} className={'create-note-form'}>
            <TextField type={'text'} id={'note'} label="Название заметки" variant="standard" fullWidth margin={'normal'}
                       value={valueNote} onChange={event => changeHandler(event)} />

            <div className={'create-note-form__add-todo'}>
                <TextField type={'text'} id={'todo'} label="Задача" variant={'standard'} fullWidth
                           value={valueTodo} onChange={event => changeHandler(event)}/>
                <IconButton onClick={addTodoHandler} title={'Добавить'} disabled={disableAddTodoBtn}>
                    <AddIcon sx={IconStyle}/>
                </IconButton>
            </div>

            {todos.map((todo) => {
                return <div key={todo.id} className={'create-note-form__todo'}>
                    {todo.title}
                </div>
            })}

            <div className={'mt-20'}>
                <Button type={'submit'} disabled={disableSaveBtn} sx={ContainedBtnStyle} variant={'contained'} startIcon={<SaveIcon />}>
                    Сохранить
                </Button>
            </div>

        </form>
    );
};

export default CreateNoteForm;
