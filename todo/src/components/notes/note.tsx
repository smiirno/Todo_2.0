import React from 'react';
import {INote} from "../../interfaces/interfaces";
import './note.css'
import ModalWindow from "../modal/modal_window";
import EditNote from "./edit_note";


const Note = (note: INote) => {

    return(
        <div>
            <div className={'note'}>
                <h3>{note.title}</h3>
                <ModalWindow btnTitle={'Редактировать'}>
                    <EditNote {...note}/>
                </ModalWindow>
            </div>
            <div>
                {note.todos.length === 0 ? <h4>Список задач пуст</h4> :
                    <ul className={'todo_list'}>
                        {note.todos.map((todo) => {
                        return <li key={todo.id} className={todo.isDone ? 'todo_list_item done_todo' : 'todo_list_item'}>
                            {parseInt(todo.id) + 1}. {todo.title}
                        </li>
                    })}
                    </ul>
                }
            </div>
        </div>
    )
};

export default Note;
