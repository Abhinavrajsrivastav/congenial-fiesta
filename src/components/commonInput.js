import React, { useState, useEffect } from "react";
import { Input, Button, message } from "antd";
import { connect } from "react-redux";
import { addUser, updateUser } from "../actions/userActions";

const InputHandler = ({ onSubmit, editMode = false, editingUser, addUser, updateUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name);
      setEmail(editingUser.email);
    } else {
      setName("");
      setEmail("");
    }
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      message.error("Name is required");
      return;
    }
    if (!email) {
      message.error("Email is required");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      message.error("Please enter a valid email address");
      return;
    }
    if (editMode && editingUser) {
      updateUser({ ...editingUser, name, email });
    } else {
      addUser({ name, email });
    }
    setName("");
    setEmail("");
  };

  return (
    <div className="header-box">
      <Input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        style={{ marginBottom: '10px' }}
      />
      <Input
        type="text"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        style={{ marginBottom: '10px' }}
      />
      <Button type="primary" onClick={handleSubmit}>
        {editMode ? "Edit user" : "Add user"}
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  editingUser: state.userState.editingUser,
});

const mapDispatchToProps = {
  addUser,
  updateUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(InputHandler);
