import React from 'react';
import {INote} from "../../interfaces/interfaces";
import ModalWindow from "../modal/modal_window";
import EditNote from "../forms/edit_note";
import './note.css'


const Note = (note: INote) => {

    return(
        <div>
            <div className={'note'}>
                <h3>{note.title}</h3>
                <ModalWindow btnTitle={'Редактировать'} btnType={'default'}>
                    <EditNote {...note}/>
                </ModalWindow>
            </div>
            {note.todos.length === 0 ? <h4>Список задач пуст</h4> :
                <ul className={'note__todo-list'}>
                    {note.todos.map((todo) => {
                        return <li key={todo.id} className={todo.isDone ? 'note__todo-list__done-todo m-10' : 'm-10'}>
                            {todo.id + 1}. {todo.title}
                        </li>
                    })}
                </ul>
            }
        </div>
    )
};

export default Note;
