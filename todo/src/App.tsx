import React from 'react';
import './App.css';
import Navbar from "./components/navbar/navbar";
import NotesList from "./components/notes/notes_list";


function App() {
    return (
        <div>
            <Navbar/>
            <NotesList/>
        </div>
    );
}

export default App;
