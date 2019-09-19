import React from "react";

export default function Users(props) {
  const { userList } = props;
  return (
    <div>
      <h1>Users</h1>
      {userList.length
        ? userList.map(user => (
            <div key={user.name}>
              User: {user.name} Email: {user.email}
            </div>
          ))
        : "No users registered yet"}
    </div>
  );
}
