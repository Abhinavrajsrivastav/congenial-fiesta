import React, { useState } from "react";
import MainComponent from "./components/mainComponent";

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" }
  ]);

  const addUser = (user) => {
    const newUser = { ...user, id: users.length + 1 };
    setUsers([...users, newUser]);
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const getUsers = () => {
    setTimeout(() => {
      setUsers([
        { id: 1, name: "John Doe", email: "john@example.com" },
        { id: 2, name: "Jane Smith", email: "jane@example.com" }
      ]);
    }, 1000);
  };

  return (
    <MainComponent
      getUsers={getUsers}
      userState={{ users }}
      addUser={addUser}
      updateUser={updateUser}
      deleteUser={deleteUser}
    />
  );
};

export default App;
