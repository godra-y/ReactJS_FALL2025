import { useNavigate } from "react-router-dom";

import "./style.css";

function Home() {
  const navigate = useNavigate();
  const clickHandle = () => {
    navigate("/characters");
  }

  return (
    <main className="home">
      <h1 className="home-title">Welcome to the Rick & Morty Explorer</h1>
      <p>Explore characters, filter by name, and learn more!</p>
      <img
        src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        alt="Rick"
      />
      <button className="explore-button" onClick={clickHandle}>Explore Characters</button>
    </main>
  );
}

export default Home;
