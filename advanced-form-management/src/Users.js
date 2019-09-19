import React from "react";

export default function Users(props) {
  const { userList } = props;
  return (
    <div className='users'>
      <h1>Users</h1>
      {userList.length
        ? userList.map(user => (
            <div key={user.name} className='user'>
              <h3>User:</h3> {user.name} <h3>  Email:</h3> {user.email}
            </div>
          ))
        : "No users registered yet"}
    </div>
  );
}
