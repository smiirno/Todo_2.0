import React, {useState} from 'react';
import {ITodo} from "../../interfaces/interfaces";
import {Button, Checkbox, TextField} from "@mui/material";
import DoneAllIcon from '@mui/icons-material/DoneAll';
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import {useAppDispatch} from "../../store/redux";
import {doneTodo, removeTodo, updateTodo} from "../../store/notes_slice";
import './edit_todo.css'


const iconStyle = {
    cursor: 'pointer',
    color: '#469597',
    bgcolor: '#DDBEAA',
    borderRadius: '5px',
    padding: '3px'
}

const EditTodo = (todo: ITodo) => {

    const dispatch = useAppDispatch()

    const [isEditTodo, setIsEditTodo] = useState<boolean>(false);
    const [valueTodo, setValueTodo] = useState<string>(todo.title);

    const editHandler = () => {
        setIsEditTodo(true)
    }

    const checkboxHandler = () => {
        dispatch(doneTodo(todo))
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
            {isEditTodo ?
                <form onSubmit={event => submitHandler(event)} className={'edit_todo_form'}>
                    <TextField type={'text'}  variant={'standard'} margin={'dense'} fullWidth
                               defaultValue={valueTodo} onChange={event => changeHandler(event)}/>
                    <Button type={'submit'} title={'Сохранить изменения'}>
                        <DoneAllIcon sx={iconStyle}/>
                    </Button>
                </form>
                :
                <div className={'edit_todo_item'}>
                    <div className={'edit_todo_checkbox_container'}>
                        <Checkbox size={'small'} defaultChecked={todo.isDone} onClick={checkboxHandler}/>
                        <h4 className={todo.isDone ? 'done_todo' : ''}>{todo.title}</h4>
                    </div>
                    <div>
                        <Button onClick={editHandler} title={'Редактировать задачу'}>
                            <EditIcon sx={iconStyle}/>
                        </Button>
                        <Button onClick={removeTodoHandler} title={'Удалить задачу'}>
                            <ClearIcon sx={iconStyle} />
                        </Button>
                    </div>
                </div>
            }
        </li>
    );
};

export default EditTodo;
