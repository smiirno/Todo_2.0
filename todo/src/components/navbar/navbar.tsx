import React, {useState} from 'react';
import {phrases} from "../../data/data";
import {IPhrase} from "../../interfaces/interfaces";
import './navbar.css'


const Navbar = () => {

    const [index, setIndex] = useState<number>(0);
    const [phrase, setPhrase] = useState<IPhrase>(phrases[index]);

    setInterval(() => {
        if (index !== phrases.length - 1) {
            setIndex(index + 1)
            setPhrase(phrases[index])
        } else {
            setIndex(0)
            setPhrase(phrases[index])
        }
    }, 30000)

    return (
        <nav className={'navbar'}>
            <div className={'quote-container'}>
                <h4>"{phrase.phrase}"</h4>
                <h5 className={'quote__owner mt-20'}>{phrase.owner}, {phrase.occupation}</h5>
            </div>
        </nav>
    );
};

export default Navbar;
