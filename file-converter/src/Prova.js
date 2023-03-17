import React, { useState } from "react";

const forms_table = () => {
  const [tableData, setTableData] = useState([]);
  const [formObject, setFormObject] = useState({
    name: "",
    email: "",
    profile: "",
  });
  const onValChange = (event) => {
    const value = (res) => ({
      ...res,
      [event.target.name]: event.target.value,
    });
    setFormObject(value);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    const checkVal = !Object.values(formObject).every((res) => res === "");
    if (checkVal) {
      const dataObj = (data) => [...data, formObject];
      setTableData(dataObj);
      const isEmpty = { name: "", email: "", profile: "" };
      setFormObject(isEmpty);
    }
    console.log(tableData);
  };
  return (
    <div>
      {" "}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          onChange={onValChange}
          value={formObject.name}
          name="name"
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          onChange={onValChange}
          value={formObject.email}
          name="email"
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Profile"
          onChange={onValChange}
          value={formObject.profile}
          name="profile"
        />
      </div>
      <div className="d-grid">
        <input
          type="submit"
          onClick={onFormSubmit}
          className="btn btn-success"
        />
      </div>
    </div>
  );
};

export default forms_table;
