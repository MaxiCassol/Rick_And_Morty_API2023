import React, { useState, useEffect } from "react";
import Cards from "../Cards/Cards";

export default function allCharacters() {
    const [char, setChar] = React.useState({
        allCharacters : [],
    });

    
    React.useEffect(() => {
    fetch('http://localhost:3001/rickandmorty')
    .then((res) => res.json())
    .then((data) => {
        setChar({
            ...char,
            allCharacters: data.onsearch,
        })
    })
    .catch((error) => console.log(error))
    },[])

    const handleAllCharacters = () => {
        setChar({
        ...char,
        allCharacters: char.allCharacters
        })
    }
    
    return (
    <div>
        <h1>All Characters:</h1>
        <Cards
            handleAllCharacters={handleAllCharacters}
        />
    </div>
    );
}