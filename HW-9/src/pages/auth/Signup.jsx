import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate, Link } from "react-router-dom";

import Spinner from "../../components/spinner/Spinner";
import ErrorBox from "../../components/error-box/ErrorBox";

import "./style.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      setError(null);
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/profile");
    } 
    catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <Spinner />;
  if (error) return <ErrorBox message={error} />;

  return (
    <div className="auth-container">
      <h1>Signup</h1>

      <form onSubmit={handleSignup} className="auth-form">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <button type="submit">Create account</button>
      </form>

      {error && <p className="error-message">{error}</p>}

      <p className="auth-links">
        Already registered? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Signup;
