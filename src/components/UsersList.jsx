import React, { useEffect, useState } from "react";
import { fetchUsers } from "../controllers/userControllers";
import { Link } from "react-router-dom";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers(setUsers);
  }, []);

  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <img src={user.avatar} alt={user.first_name} />
            <p>
              {user.first_name} {user.last_name}
            </p>
            <p>{user.email}</p>
            <Link to={`/edit-user/${user.id}`}>Edit</Link>
            <button onClick={() => window.open(`/files/${user.id}`, "_blank")}>
              Files
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
