import React from 'react';
import {INote} from "../../interfaces/interfaces";
import './note.css'
import {Link} from "react-router-dom";


const Note = (note: INote) => {

    return(
        <div>
            <div className={'note'}>
                <h4>{note.title}</h4>
                <Link to={`/edit/${note.id}`}>Редактировать</Link>
            </div>
            <div>
                {note.todos.length === 0 ? <h4>Список задач пуст</h4> :
                    <ul>
                        {note.todos.map((todo) => {
                        return <li key={todo.id}>{todo.title}</li>
                    })}
                    </ul>
                }
            </div>
        </div>

    )
};

export default Note;
