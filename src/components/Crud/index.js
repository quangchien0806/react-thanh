import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getList, selectListUser } from "../../features/crud/crud";

const Crud = () => {
  const dispatch = useDispatch();
  const listUser = useSelector(selectListUser);
  console.log(listUser);

  useEffect(() => {
    dispatch(getList());
  }, []);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    age: "",
  });

  const handleClickAdd = async (e) => {
    e.preventDefault();
    await fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: form.firstName,
        lastName: form.lastName,
        age: form.age,
      }),
    });
    setForm({
      firstName: "",
      lastName: "",
      age: "",
    });
  };

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    form[name] = value;
    setForm(form);
    console.log(form);
  };
  return (
    <form>
      <label>First Name:</label>
      <input
        onChange={handleChangeForm}
        name="firstName"
        type="text"
        placeholder="Enter first name"
      />
      <label>Last Name:</label>
      <input
        onChange={handleChangeForm}
        name="lastName"
        type="text"
        placeholder="Enter last name"
      />
      <label>Age</label>
      <input
        onChange={handleChangeForm}
        name="age"
        type="text"
        placeholder="Enter age"
      />
      <button onClick={handleClickAdd}>Add</button>
    </form>
  );
};

export default Crud;
