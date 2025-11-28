import { useAuth } from "../../context/AuthContext";
import "./style.css";

function Profile() {
  const { user, logout } = useAuth();

  return (
    <div className="profile-container">
      <h1>Profile</h1>

      <div className="profile-info">
        <p>Email: {user?.email}</p>
        <p>UID: {user?.uid}</p>
      </div>

      <button className="logout-btn" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default Profile;
