import React, { useState } from "react";
import CharacterCard from "../character-card/CharacterCard";
import "./style.css";

function CharacterList() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");

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

    const filteredCharacters = characters.filter((char) =>
        char.name.toLowerCase().includes(search.toLowerCase())
    );

    const clearSearch = () => {
        setSearch("");
    };

    return (
        <div className="character-list">
            <h2>Rick and Morty Characters</h2>

            <button className="load-btn" onClick={fetchCharacters} disabled={loading}>
                {loading ? "Loading..." : "Load Characters"}
            </button>

            {characters.length > 0 && (
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search by name..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button onClick={clearSearch} className="clear-btn">
                        Clear
                    </button>
                </div>
            )}

            <ul>
                {filteredCharacters.map((char) => (
                    <CharacterCard key={char.id} character={char} />
                ))}
            </ul>

            {characters.length > 0 && filteredCharacters.length === 0 && (
                <p className="no-results">No characters found</p>
            )}
        </div>
    );
}

export default CharacterList;

