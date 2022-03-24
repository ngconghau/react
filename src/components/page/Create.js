import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [username, setUser] = useState("");
  const [password, setPass] = useState("");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const userNew = { username, password };

    setIsPending(true);

    fetch("http://localhost:8000/user/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userNew),
    }).then(() => {
      setIsPending(false);
      console.log("success");
      navigate("/");
    });
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
        {!isPending && <button>Create</button>}
        {isPending && <button>Creating...</button>}
      </form>
    </div>
  );
};

export default Create;
