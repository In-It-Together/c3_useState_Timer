import React, { useState, useEffect } from 'react';
const Pokedex = require('pokedex-promise-v2');
const P = new Pokedex();

const Fetcher = (props) => {
    const [poke, setPoke] = useState(undefined);

    useEffect(() =>{
        search(props.number);
    });

    const search = (id) =>{
        P.getPokemonByName(id)
        .then(response =>{
            console.log(response);
            setPoke(response);
        });
    };

    const statMapper = array => {
        return array.map((stat, index) =>{
            return (
                <li key={index}>
                    <span className="stat-name">{`${stat.stat.name} `}</span>
                    {stat.base_stat}
                </li>
            )
        })
    }

    const typeMapper = array => {
        return array.map((type, index) =>{
            return (
                <li key={index}>
                    {type.type.name}
                </li>
            );
        });
    };

    const show = (character) => {
        const { name, sprites, types, stats } = character;
        return(
            <>
            <h1 className="name">{name}</h1>
            <img src={sprites.front_default} alt={name + ' sprite'}></img>
            <div className="types"><ul className="type-list">Type: {typeMapper(types)}</ul></div>
            <div className="stats"><ol className="stat-list">Base Stats: {statMapper(stats)}</ol></div>
            </>
        )
    };

    return(
        <>
        {poke ? show(poke) : "loading"}
        </>
    )
};

export default Fetcher;