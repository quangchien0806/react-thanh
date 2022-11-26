import React, { useState } from "react";
import { Link } from "react-router-dom";

const State = () => {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    address: "",
    select: "",
  });
  const [gender, setGender] = useState("");
  console.log(gender);

  const [skill, setSkill] = useState([]);

  const handleChangeInput = (e) => {
    if (e.target.checked) {
      setSkill((skill) => [...skill, e.target.value]);
    } else {
      setSkill(skill.filter((item) => item !== e.target.value));
    }
  };
  console.log(skill);

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    form[name] = value;
    setForm(form);
    console.log(form);
  };

  return (
    <div>
      <form>
        <label>First Name:</label>
        <input
          onChange={handleChangeForm}
          name="first_name"
          type="text"
          placeholder="Enter first name"
        />
        <label>Last Name:</label>
        <input
          onChange={handleChangeForm}
          name="last_name"
          type="text"
          placeholder="Enter last name"
        />
        <label>Email</label>
        <input
          onChange={handleChangeForm}
          name="email"
          type="email"
          placeholder="Enter email"
        />
        <label>Password</label>
        <input
          onChange={handleChangeForm}
          name="password"
          type="text"
          placeholder="Enter password"
        />
        <label>Address</label>
        <textarea
          onChange={handleChangeForm}
          name="address"
          type="text"
          placeholder="Enter address"
        />
        <label htmlFor="city">City</label>
        <select name="select" onChange={handleChangeForm}>
          <option value="dn">Đà Nẵng</option>
          <option value="hn">Hà Nội</option>
          <option value="hcm">Hồ Chí Minh</option>
          <option value="nt">Nha Trang</option>
        </select>
        <div>Gender:</div>
        <div>
          <input
            type="radio"
            checked={gender === "Male"}
            onChange={() => setGender("Male")}
            value="Male"
            name="gender"
          />
          Male
          <input
            type="radio"
            checked={gender === "Female"}
            onChange={() => setGender("Female")}
            value="Female"
            name="gender"
          />
          Female
          <input
            type="radio"
            checked={gender === "Other"}
            onChange={() => setGender("Other")}
            value="Other"
            name="gender"
          />
          Other
        </div>
        <div>Skill</div>
        <div>
          <div>
            <input
              name="reactjs"
              onChange={handleChangeInput}
              value="reactjs"
              type="checkbox"
            />{" "}
            ReactJS
          </div>
          <div>
            <input
              onChange={handleChangeInput}
              name="php"
              value="php"
              type="checkbox"
            />{" "}
            PHP
          </div>
          <div>
            <input
              name="nodejs"
              onChange={handleChangeInput}
              value="nodejs"
              type="checkbox"
            />{" "}
            NodeJS
          </div>
        </div>
      </form>
      <button>
        <Link to={`/effect`}>Next Effect</Link>
      </button>
      <button>
        <Link to={`/reducers`}>Next Reducers</Link>
      </button>
    </div>
  );
};

export default State;
