import React from 'react';
import {useAppSelector} from "../../store/redux";
import {INote} from "../../interfaces/interfaces";
import ModalWindow from "../modal/modal_window";
import CreateNoteForm from "../forms/create_note_form";
import Note from "./note";
import './notes_list.css'


const NotesList = () => {

    const {notes} = useAppSelector(state => state.notesReducer)

    return (
        <div className={'notes-list'}>
            <ModalWindow btnTitle={'Добавить заметку'} btnType={'default'}>
                <CreateNoteForm/>
            </ModalWindow>
            {notes.map((note: INote) => {
                return <Note key={note.id} {...note}/>
            })}
        </div>
    );
};

export default NotesList;
