// import { getUserList } from "../services/api";

// export const fetchUsers = async (setUsers) => {
//   try {
//     const data = await getUserList();
//     setUsers(data.data);
//   } catch (error) {
//     console.error("Failed to fetch users", error);
//   }
// };

import React, { useState } from "react";
import { createUser } from "../services/api";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const navigate = useNavigate();

  const handleCreateUser = async (e) => {
    e.preventDefault();
    const newUser = { name, job };
    await createUser(newUser);
    navigate("/users"); // Redirect to users list after creation
  };

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleCreateUser}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Job:</label>
          <input
            type="text"
            value={job}
            onChange={(e) => setJob(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default CreateUser;
