import { useState, useEffect } from "react";

const FetchingData = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
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

  return (
    <div>
      <input type="text" style={{ display: "block", marginBottom: "10px" }}></input>
      {loading ?<p>Loading...</p> : 
      <ul>{users.map((user, index) => (
        <li key={index}>
            <p>{user.name}</p>
            <p>{user.email.toLowerCase()}</p>
            <p>{user.company.name}</p>
        </li>
      ))}</ul>}
    </div>
  );
};

export default FetchingData;
