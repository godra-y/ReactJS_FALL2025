// import { NavLink } from "react-router-dom";

// import "./style.css";

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <NavLink to="/">Home</NavLink>
//       <NavLink to="/characters">Characters</NavLink>
//       <NavLink to="/about">About</NavLink>
//       <NavLink to="/profile">Profile</NavLink>
//     </nav>
//   );
// }

// export default Navbar;

import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import "./style.css";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/characters">Characters</Link>
      <Link to="/about">About</Link>

      {!user && (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </>
      )}

      {user && (
        <>
          <Link to="/profile">Profile</Link>
          <button onClick={logout}>Logout</button>
        </>
      )}
    </nav>
  );
}

export default Navbar;