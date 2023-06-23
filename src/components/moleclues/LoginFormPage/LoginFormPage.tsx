import React from "react";
import { useState } from "react";
import { loginFormConfig } from "../../../../_mocks_/loginFormConfig";
import { useRouter } from "next/router";

const LoginFormPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    PhoneCountryCode: "",
    PhoneNumber: "",
    FirstName: "",
    LastName: "",
    EmailAddress: "",
    Password: "",
  });

  const {
    countryCodeLbl,
    phoneNumberLbl,
    firstNameLbl,
    lastNameLbl,
    emailAddressLbl,
    submitLbl,
  } = loginFormConfig;

  const handleChange = (e: any) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    switch (inputName) {
      case "PhoneCountryCode":
        setFormData({ ...formData, PhoneCountryCode: inputValue });
        return;
      case "PhoneNumber":
        setFormData({ ...formData, PhoneNumber: inputValue });
        return;
      case "FirstName":
        setFormData({ ...formData, FirstName: inputValue });
        return;
      case "LastName":
        setFormData({ ...formData, LastName: inputValue });
        return;
      case "EmailAddress":
        setFormData({ ...formData, EmailAddress: inputValue });
        return;
      case "Password":
        setFormData({ ...formData, Password: inputValue });
        return;
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    document.cookie = `username=${encodeURIComponent(formData.EmailAddress)}`;
    document.cookie = `password=${encodeURIComponent(formData.Password)}`;
    alert("Sign Up Complete");

    setFormData({
      PhoneCountryCode: "",
      PhoneNumber: "",
      FirstName: "",
      LastName: "",
      EmailAddress: "",
      Password: "",
    });
    router.push("/signin");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid-x grid-margin-x">
        <div className="cell small-4 ">
          <label className="m-t-10 m-r-5">
            {countryCodeLbl}
            <input
              className="m-t-10 m-r-5"
              type="text"
              name="PhoneCountryCode"
              placeholder=""
              onChange={(e) => {
                handleChange(e);
              }}
              value={formData.PhoneCountryCode}
            />
          </label>
        </div>
        <div className="cell small-8 ">
          <label className="m-t-10">
            {phoneNumberLbl}
            <input
              className="m-t-10 "
              type="text"
              name="PhoneNumber"
              placeholder="Phone Number"
              onChange={(e) => {
                handleChange(e);
              }}
              value={formData.PhoneNumber}
            />
          </label>
        </div>
        <div className="cell small-12 ">
          <label className=" ">
            {firstNameLbl}
            <input
              className=" "
              type="text"
              name="FirstName"
              placeholder="First Name"
              onChange={(e) => {
                handleChange(e);
              }}
              value={formData.FirstName}
            />
          </label>
          <label>
            {lastNameLbl}
            <input
              className=" "
              type="text"
              name="LastName"
              placeholder="Last Name"
              onChange={(e) => {
                handleChange(e);
              }}
              value={formData.LastName}
            />
          </label>
          <label>
            {emailAddressLbl}
            <input
              type="text"
              name="EmailAddress"
              placeholder="Email Address"
              onChange={(e) => {
                handleChange(e);
              }}
              value={formData.EmailAddress}
            />
          </label>
          <label>
            {emailAddressLbl}
            <input
              type="password"
              name="Password"
              placeholder="Enter Password"
              onChange={(e) => {
                handleChange(e);
              }}
              value={formData.Password}
            />
          </label>
        </div>
        <div className="cell small-12 medium-12 button-group">
          <button className="button">{submitLbl}</button>
        </div>
      </div>
    </form>
  );
};
export default LoginFormPage;
