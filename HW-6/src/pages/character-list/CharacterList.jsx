import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { getRandomCharacters } from "../../services/charactersService";

import Spinner from "../../components/spinner/Spinner";
import ErrorBox from "../../components/error-box/ErrorBox";
import CharacterCard from "../../components/character-card/CharacterCard";

import "./style.css";

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get("q") || "";

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getRandomCharacters();
      setCharacters(data);
    } 
    catch (err) {
      setError(err.message);
    } 
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filtered = characters.filter((char) =>
    char.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchParams(value ? { q: value } : {});
  };

  if (loading) return <Spinner />;
  if (error) return <ErrorBox message={error} />;

  return (
    <div className="character-list">
      <h1 className="characters-title">Rick and Morty Characters</h1>

      <button className="load-btn" onClick={fetchData} disabled={loading}>
        {loading ? "Loading..." : "Load Characters"}
      </button>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button onClick={() => setSearchParams({})} className="clear-btn">
          Clear
        </button>
      </div>

      <ul>
        {filtered.length > 0 ? (
          filtered.map((char) => (
            <Link key={char.id} to={`/characters/${char.id}`}>
              <CharacterCard character={char} />
            </Link>
          ))
        ) : (
          <p className="no-results">No characters found</p>
        )}
      </ul>
    </div>
  );
}

export default CharacterList;
