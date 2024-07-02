import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUsers, addUser, updateUser, deleteUser, setEditingUser } from "../actions/userActions";
import InputHandler from "./commonInput";
import SimpleTable from "./simpleTable";

const MainComponent = ({ getUsers, userState, addUser, updateUser, deleteUser, setEditingUser }) => {
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const handleAddUser = ({ name, email }) => {
    addUser({ name, email });
  };

  return (
    <div id="main-container-wrapper" style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <InputHandler onSubmit={handleAddUser} editMode={Boolean(userState.editingUser)} />
      {userState.users.length ? (
        <SimpleTable dataSource={userState.users} setEditingUser={setEditingUser} deleteUser={deleteUser} />
      ) : (
        "No user data"
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  userState: state.userState,
});

const mapDispatchToProps = {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
  setEditingUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
