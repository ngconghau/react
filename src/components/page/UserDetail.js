import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../useFetch";

const UserDetails = () => {
  const { id } = useParams();
  const {
    data: users,
    isPending,
    error,
  } = useFetch("http://localhost:8000/user/" + id);
  const navigate = useNavigate();

  const handleDelete = () => {
    fetch("http://localhost:8000/user/" + users.id, {
      method: "DELETE",
    }).then(navigate("/"));
  };
  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {users && (
        <div className="user-preview">
          <h2>username: {users.username}</h2>
          <h2>password: {users.password}</h2>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
