// import React, { useEffect, useState } from "react";
// import { fetchUser } from "../controllers/userController";
// import { useParams } from "react-router-dom";

// const EditUser = () => {
//   const { id } = useParams();
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     fetchUser(id, setUser);
//   }, [id]);

//   return (
//     <div>
//       {user && (
//         <div>
//           <h2>Edit User</h2>
//           <img src={user.avatar} alt={user.first_name} />
//           <p>
//             {user.first_name} {user.last_name}
//           </p>
//           <p>{user.email}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EditUser;

import React, { useEffect, useState } from "react";
import { getUserDetails, updateUser } from "../services/api";
import { useParams, useNavigate } from "react-router-dom";

const EditUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const userDetails = await getUserDetails(id);
      setUser(userDetails.data);
      setName(userDetails.data.first_name); // Assuming you're editing the first name
      setJob(userDetails.data.job || ""); // Adjust based on the API
    };
    fetchData();
  }, [id]);

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    const updatedUser = { name, job };
    await updateUser(id, updatedUser); // You need to implement this in your API
    navigate("/users");
  };

  return (
    <div>
      {user && (
        <div>
          <h2>Edit User</h2>
          <form onSubmit={handleUpdateUser}>
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
            <button type="submit">Update User</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default EditUser;
