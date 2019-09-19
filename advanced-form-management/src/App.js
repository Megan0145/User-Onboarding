import React, { useState, useEffect } from "react";
import "./App.css";
import FormContainer from "./Form";
import Users from "./Users";
import axios from "axios";

const usersAPI = "https://reqres.in/api/users";

function App() {
  const [userList, setUserList] = useState([]);
  const [serverError, setServerError] = useState("");

  const addUser = (values, actions) => {
    axios
      .post(usersAPI, {
        name: values.name,
        email: values.email,
        password: values.password,
        tos: values.tos
      })
      .then(response => {
        setUserList(userList.concat(response.data));
        actions.resetForm();
      })
      .catch(error => {
        setServerError(serverError + error.message);
      });
  };

  return (
    <div className="App">
      {serverError}
      <div className="container">
        <FormContainer onSubmit={addUser} />
        <Users userList={userList} />
      </div>
    </div>
  );
}

export default App;
