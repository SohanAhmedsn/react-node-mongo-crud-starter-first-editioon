import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const UpdateUser = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const url = `http://localhost:3000/users/update/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  const handleUpdateUser = (e) => {

  };
  return (
    <div>
      <h2>Name: {user.name}</h2>
      <p>
        <small>ID: {id}</small>{" "}
      </p>
      <form onSubmit={handleUpdateUser}>
        <input type="text" name="" id="" />
        <input type="email" name="" id="" />
        <input type="submit" value="Subdate" />
      </form>
    </div>
  );
};

export default UpdateUser;
