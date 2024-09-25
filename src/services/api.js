// src/services/api.js
const token = localStorage.getItem("token");

export const getUserList = async () => {
  const response = await fetch("https://reqres.in/api/users", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};

export const getUserDetails = async (id) => {
  const response = await fetch(`https://reqres.in/api/users/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};

export const createUser = async (user) => {
  const response = await fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return response.json();
};

export const updateUser = async (id, user) => {
  const response = await fetch(`https://reqres.in/api/users/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return response.json();
};
