import React, { useState } from "react";
import CharacterCard from "../character-card/CharacterCard";
import "./style.css";

function CharacterList() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchCharacters = async () => {
        setLoading(true);
        try {
            const randomPage = Math.floor(Math.random() * 42) + 1;
            const res = await fetch(`https://rickandmortyapi.com/api/character?page=${randomPage}`);
            const data = await res.json();
            const shuffled = data.results.sort(() => 0.5 - Math.random());
            setCharacters(shuffled.slice(0, 10));
        } 
        catch (error) {
            console.error("Error fetching data:", error);
        } 
        finally {
            setLoading(false);
        }
    };

    return (
        <div className="character-list">
        <h2>Rick and Morty Characters</h2>
        <button onClick={fetchCharacters} disabled={loading}>
            {loading ? "Loading..." : "Load Characters"}
        </button>

        <ul>
            {characters.map((char) => (
            <CharacterCard key={char.id} character={char} />
            ))}
        </ul>
        </div>
    );
}

export default CharacterList;
