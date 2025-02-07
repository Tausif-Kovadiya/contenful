export const runtime = "edge";

interface User {
  id: number;
  name: string;
  username?: string; //? denotes optional field.
}

const Users = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    // cache: "no-store",
    next: { revalidate: 20 }, //it get fresh data after 20 seconds, instead of showing from cache.
  });
  const users: User[] = await response.json();

  return (
    <>
      <h1>Users</h1>

      <ul>
        {users?.map((user) => (
          <li key={user.id}> {user.username} </li>
        ))}
      </ul>
    </>
  );
};



export default Users;
