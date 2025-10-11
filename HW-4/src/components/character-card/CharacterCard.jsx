import React from "react";
import "./style.css"

function CharacterCard({ character }) {
    return (
        <div className="character-card">
            <img src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
        </div>
    );
}

export default CharacterCard;