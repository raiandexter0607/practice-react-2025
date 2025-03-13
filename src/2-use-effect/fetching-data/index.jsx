import { useState, useEffect } from "react";

const FetchingData = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        console.log("running effect...")
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const usersJson = await response.json();
        console.log(usersJson)
        setUsers(usersJson);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const filteredUsers = search.trim() ? users.filter((user) => search ? user.name.toLowerCase().includes(search.toLowerCase().trim()) : true) : users
  return (
    <div>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
      {loading ? (<p>Loading...</p>) : 
      filteredUsers.length !== 0 ?
      <ul>{filteredUsers.map((user, index) => (
        <li key={index}>
            <p>{user.name}</p>
            <p>{user.email.toLowerCase()}</p>
            <p>{user.company.name}</p>
        </li>
      ))}</ul> : (<p>User not found</p>)}
    </div>
  );
};

export default FetchingData;
