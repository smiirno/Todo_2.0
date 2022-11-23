import React from 'react';
import ModalWindow from "../modal/modal_window";
import NoteForm from "../note_form/note_form";
import {useAppSelector} from "../../store/redux";
import {INote} from "../../interfaces/interfaces";
import './notes_list.css'
import Note from "./note";


const NotesList = () => {

    const {notes} = useAppSelector(state => state.notesReducer)

    return (
        <div className={'notes_list'}>
            <ModalWindow btnTitle={'Добавить заметку'}>
                <NoteForm/>
            </ModalWindow>
            {notes.map((note: INote) => {
                return <Note key={note.id} {...note}/>
            })}
        </div>
    );
};

export default NotesList;
