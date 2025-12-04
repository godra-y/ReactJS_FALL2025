import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate, Link } from "react-router-dom";

import Spinner from "../../components/spinner/Spinner";
import ErrorBox from "../../components/error-box/ErrorBox";

import "./style.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setError(null);
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/profile");
    } 
    catch (err) {
      setError(err.message);
    }
    finally {
      setLoading(false);
    }
  };

  if (loading) return <Spinner />;
  if (error) return <ErrorBox message={error} />;

  return (
    <div className="auth-container">
      <h1>Login</h1>

      <form onSubmit={handleLogin} className="auth-form">
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
        <button type="submit">Login</button>
      </form>

      {error && <p className="error-message">{error}</p>}

      <p className="auth-links">
        No account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
}

export default Login;