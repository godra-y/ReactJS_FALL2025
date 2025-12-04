import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams, Link } from "react-router-dom";

import { fetchItems, setQuery } from "../../features/items/itemsSlice";

import Spinner from "../../components/spinner/Spinner";
import ErrorBox from "../../components/error-box/ErrorBox";
import CharacterCard from "../../components/character-card/CharacterCard";

import "./style.css";

function CharacterList() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("q") || "";

  const { list, loadingList, errorList } = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(setQuery(query));
    dispatch(fetchItems(query));
  }, []);

  const filtered = list.filter((char) =>
    char.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchParams(value ? { q: value } : {});
  };

  if (loadingList) return <Spinner />;
  if (errorList) return <ErrorBox message={errorList} />;

  return (
    <div className="character-list">
      <h1 className="characters-title">Rick and Morty Characters</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name..."
          value={query}
          onChange={handleSearchChange}
        />
        <button className="clear-btn" onClick={() => setSearchParams({})}>
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
