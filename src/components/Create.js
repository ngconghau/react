import { useState } from "react";

const Create = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const userNew = { user, pass };
    console.log(userNew);
  };
  return (
    <div className="create">
      <h2>Create a new User</h2>
      <form onSubmit={handleSubmit}>
        <label>User name </label>
        <input
          type="text"
          required
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <label>Password </label>
        <input
          type="password"
          required
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button>Create</button>
      </form>
    </div>
  );
};

export default Create;
