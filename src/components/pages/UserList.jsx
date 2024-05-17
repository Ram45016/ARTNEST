import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../Redux/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import '../../assets/css/userList.css'; // Make sure to import your CSS file

const UserList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const usersList = useSelector((state) => state.user.userList);
  const users = usersList[0];

  return (
    <div className="user-list-container">
      <h2>User List</h2>
      <table className="user-list">
        <thead>
          <tr>
            <th>User ID</th>
            <th>User Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
