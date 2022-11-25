import React from 'react';
import './App.css';
import Navbar from "./components/navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotesList from "./components/notes/notes_list";
import EditNote from "./components/forms/edit_note";


function App() {
    return (
        <div>
            {/*<BrowserRouter>*/}
                <Navbar/>
                <NotesList/>
                {/*<Routes>*/}
                {/*    <Route path={'/'} element={<NotesList/>}/>*/}
                {/*    <Route path={'/edit/:id'} element={<EditNote/>}/>*/}
                {/*</Routes>*/}
            {/*</BrowserRouter>*/}
        </div>
    );
}

export default App;
