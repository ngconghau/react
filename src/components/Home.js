import UserList from "./UserList";
import useFetch from "./useFetch";
export default function Home() {
  const {
    data: users,
    isPending,
    error,
  } = useFetch("http://localhost:8000/user/");

  return (
    <div className="home">
      {error && <div> {error}</div>}
      {isPending && <div>Loading...</div>}
      {users && <UserList users={users} title={"All users"} />}
    </div>
  );
}
