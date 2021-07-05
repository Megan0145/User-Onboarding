import React from "react";

export default function Users(props) {
  const { userList } = props;
  return (
    <div className="users">
      <h1>Users</h1>
      {userList.length
        ? userList.map(user => (
            <div key={user.name} className="user">
              <h3>User:</h3> {user.name} <h3> Role:</h3> {user.role}
            </div>
          ))
        : "No users registered yet"}
    </div>
  );
}
