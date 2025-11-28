// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { getCharacterById } from "../../services/charactersService";

// import Spinner from "../../components/spinner/Spinner";
// import ErrorBox from "../../components/error-box/ErrorBox";

// import "./style.css";

// function ItemDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [character, setCharacter] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function loadCharacter() {
//       try {
//         setLoading(true);
//         const data = await getCharacterById(id);
//         setCharacter(data);
//       } 
//       catch (err) {
//         setError(err.message);
//       } 
//       finally {
//         setLoading(false);
//       }
//     }
//     loadCharacter();
//   }, [id]);

//   if (loading) return <Spinner />;
//   if (error) return <ErrorBox message={error} />;
//   if (!character) return <p>Not found</p>;

//   return (
//     <div className="character-details-container">
//       <button onClick={() => navigate(-1)} className="back-btn">
//         ← Back
//       </button>

//       <div className="character-details">
        
//         <img src={character.image} alt={character.name} />

//         <h2>{character.name}</h2>

//         <div className="character-info">
//           <p>Status: {character.status}</p>
//           <p>Species: {character.species}</p>
//           <p>Gender: {character.gender}</p>
//           <p>Origin: {character.origin.name}</p>
//           <p>Location: {character.location.name}</p>
//           <p>Episodes: {character.episode.length}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ItemDetails;

import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchItemById } from "../../features/items/itemsSlice";
import Spinner from "../../components/spinner/Spinner";
import ErrorBox from "../../components/error-box/ErrorBox";

import "./style.css";

function CharacterDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { selectedItem, loadingItem, errorItem } = useSelector(
    (state) => state.items
  );

  useEffect(() => {
    dispatch(fetchItemById(id));
  }, [id]);

  if (loadingItem) return <Spinner />;
  if (errorItem) return <ErrorBox message={errorItem} />;
  if (!selectedItem) return <p>Not found</p>;

  return (
    <div className="character-details-container">
      <button onClick={() => navigate(-1)} className="back-btn">
        ← Back
      </button>

      <div className="character-details">
        <img src={selectedItem.image} alt={selectedItem.name} />

        <h2>{selectedItem.name}</h2>

        <div className="character-info">
          <p>Status: {selectedItem.status}</p>
          <p>Species: {selectedItem.species}</p>
          <p>Gender: {selectedItem.gender}</p>
          <p>Origin: {selectedItem.origin?.name}</p>
          <p>Location: {selectedItem.location?.name}</p>
          <p>Episodes: {selectedItem.episode?.length}</p>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetails;