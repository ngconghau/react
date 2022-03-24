import { useState } from "react";
import { useNavigate } from "react-router-dom";
import db from "../../firebase";

const Create = () => {
  const [username, setUser] = useState("");
  const [password, setPass] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userNew = { username, password };
    db.collection('users').add({
      username: username,
      password: password
    }).then(
      navigate("/", alert("add success"))
    )
  };
  return (
    <div className="create">
      <h2>Create a new User</h2>
      <form onSubmit={handleSubmit}>
        <label>User name </label>
        <input
          type="text"
          required
          value={username}
          onChange={(e) => setUser(e.target.value)}
        />
        <label>Password </label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPass(e.target.value)}
        />
        <button>Create</button>

      </form>
    </div>
  );
};

export default Create;
