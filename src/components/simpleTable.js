import React from "react";
import PropTypes from "prop-types";
import { Table, Button, Popconfirm } from "antd";
import { connect } from "react-redux";
import { setEditingUser, deleteUser } from "../actions/userActions";

const SimpleTable = ({ dataSource, setEditingUser, deleteUser }) => {
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <>
          <Button onClick={() => setEditingUser(record)} style={{ marginRight: '10px' }}>
            Edit
          </Button>
          <Popconfirm
            title="Are you sure you want to delete this user?"
            onConfirm={() => deleteUser(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  return (
    <Table dataSource={dataSource} columns={columns} pagination={false} rowKey="id" />
  );
};

SimpleTable.propTypes = {
  dataSource: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })
  ).isRequired,
  setEditingUser: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  setEditingUser,
  deleteUser,
};

export default connect(null, mapDispatchToProps)(SimpleTable);
