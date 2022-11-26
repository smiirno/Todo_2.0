import React, {useState} from 'react';
import {ITodo} from "../../interfaces/interfaces";
import {useAppDispatch} from "../../store/redux";
import {toggleComplete, removeTodo, updateTodo} from "../../store/notes_slice";
import {Checkbox, IconButton, TextField} from "@mui/material";
import DoneAllIcon from '@mui/icons-material/DoneAll';
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import {IconStyle} from "../../custom_MUI_styles/custom_MUI_styles";
import './edit_todo.css'


const EditTodo = (todo: ITodo) => {

    const dispatch = useAppDispatch()

    const [isEditTodo, setIsEditTodo] = useState<boolean>(false);
    const [valueTodo, setValueTodo] = useState<string>(todo.title);

    const editHandler = () => {
        setIsEditTodo(true)
    }

    const checkboxHandler = () => {
        dispatch(toggleComplete(todo))
    }

    const changeHandler = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setValueTodo(event.currentTarget.value)
    }

    const removeTodoHandler = () => {
        dispatch(removeTodo(todo))
    }

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const copy = Object.assign(todo)
        const updatedTodo: ITodo = {
            id: copy.id,
            title: valueTodo,
            isDone: copy.isDone,
            noteId: copy.noteId
        }
        dispatch(updateTodo(updatedTodo))
        setIsEditTodo(false)
    }

    return (
        <li>
            {isEditTodo
                ?
                <form onSubmit={event => submitHandler(event)} className={'edit-todo-form'}>
                    <TextField type={'text'} variant={'standard'} margin={'dense'} fullWidth
                               defaultValue={valueTodo} onChange={event => changeHandler(event)}/>
                    <IconButton type={'submit'} title={'Сохранить изменения'}>
                        <DoneAllIcon sx={IconStyle}/>
                    </IconButton>
                </form>
                :
                <div className={'edit-todo-form__todo mtb-10'}>
                    <div className={'edit-todo-form__edit-todo'}>
                        <Checkbox size={'small'} checked={todo.isDone} onClick={checkboxHandler}/>
                        <h4 className={todo.isDone ? 'note__todo-list__done-todo' : ''}>{todo.title}</h4>
                    </div>
                    <div>
                        <IconButton onClick={editHandler} title={'Редактировать задачу'}>
                            <EditIcon sx={IconStyle}/>
                        </IconButton>
                        <IconButton onClick={removeTodoHandler} title={'Удалить задачу'}>
                            <ClearIcon sx={IconStyle} />
                        </IconButton>
                    </div>
                </div>
            }
        </li>
    );
};

export default EditTodo;
