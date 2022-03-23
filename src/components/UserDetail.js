import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const UserDetails = () => {
  const { id } = useParams();
  const {
    data: users,
    isPending,
    error,
  } = useFetch("http://localhost:8000/user/" + id);

  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {users && (
        <div className="user-preview">
          <h2>username: {users.username}</h2>
          <h2>password: {users.password}</h2>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
