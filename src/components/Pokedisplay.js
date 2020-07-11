import React, { useState } from 'react';
import Fetcher from './Fetcher';


const Pokedisplay = () => {
    const [counter, setCounter] = useState(1);
    
    return (
        <>
            <Fetcher number={counter} />
            <br />
            <button className="next-button" onClick={() => setCounter(counter+1)}>Next Pokemon</button>
            <button className="next-button" onClick={() => setCounter(Math.floor(Math.random() * 807))}>Random Pokemon</button>
            <button className="next-button" onClick={() => setCounter(1)}>Reset Counter</button>
            <br/>
        </>
    );
};

export default Pokedisplay;