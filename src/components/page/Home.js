import UserList from "./UserList";
import useFetch from "../useFetch";
export default function Home() {
  const {
    data: users,
    isPending,
  } = useFetch("user");
  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {users && <UserList users={users} title={"All users"} />}
    </div>
  );
}
