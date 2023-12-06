import React, { useState } from "react";
import { Container } from "./styles";
import AdminInput from "../../components/Reusable/AdminInput";
import logo from "../../assets/images/itLogo.svg";
import ButtonComb from "../../components/Reusable/ButtonComb/Button";
import { useNavigate } from "react-router-dom";
import show from "../../assets/icons/show.png";
import hide from "../../assets/icons/hide.png";
function AdminSign() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const navigate = useNavigate();

  function encodeBase64(str) {
    return btoa(str);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.login.value;
    const password = e.target.elements.password.value;

    if (name === "root123" && password === "root123") {
      localStorage.setItem("tokenAdmin", encodeBase64(name + ":" + password));
      navigate("/admin");
    } else {
      setLoginError(true);
    }
  };

  return (
    <Container>
      <form className="forms" onSubmit={handleSubmit}>
        <Container.Header>
          <img src={logo} alt="logo" />
          <p className="headerText">Build Your Future With Us</p>
        </Container.Header>
        <div className="inputBox">
          <label htmlFor="login">Enter Login</label>
          <div className="inputField">
            <input
              id="login"
              type="text"
              className="adminLog"
              name="login"
              label={"Login"}
              placeholder={"Enter Login"}
            />
          </div>
        </div>
        <div className="inputBox">
          <label htmlFor="password">Enter Password</label>
          <div className="inputField">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              className="adminLog"
              name="password"
              label={"Password"}
              placeholder={"Enter password"}
            />
            <img
              src={showPassword ? `${show}` : `${hide}`}
              alt="eye icon"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
        </div>

        <button className="submitBtn" type="submit">
          Sign In
        </button>
        {loginError && (
          <p className="errorText">Incorrect login or password.</p>
        )}
      </form>
    </Container>
  );
}

export default AdminSign;
