import { getUserList } from "../services/api";

export const fetchUsers = async (setUsers) => {
  try {
    const data = await getUserList();
    setUsers(data.data);
  } catch (error) {
    console.error("Failed to fetch users", error);
  }
};
