import React from "react";
import { Link } from "react-router-dom";
import "../styles/login.scss";

const LoginForm = ({
  handleInput,
  formSubmit,
  validate,
  handleVisibility,
  email,
  password,
  passwordType,
  length,
  defaultColor,
  formFilled,
  showPassword,
}) => {
  return (
    <>
      <Link to="/">
        <button className="login__right__goback">Go back</button>
      </Link>
      <form
        onSubmit={(e) => formSubmit(e)}
        onChange={(e) => validate(e)}
        className="login__right__form"
      >
        <h1 className="login__right__form__title">
          Become our client
        </h1>
        <section className="login__right__form__input">
          <label htmlFor="email">E-mail address</label>
          <input
            placeholder="e.g. john@mail.com"
            type="text"
            id="email"
            value={email}
            onChange={(e) => handleInput(e)}
          />
        </section>
        <section className="login__right__form__input">
          <label htmlFor="password">Password</label>
          <input
            value={password}
            type={passwordType}
            id="password"
            onChange={(e) => handleInput(e)}
            autoComplete="off"
          />
          <div
            style={{
              backgroundColor: defaultColor,
              width: length,
            }}
            className="login__right__form__input__strenght"
          ></div>
          <div className="login__right__form__input__checkbox">
            <input
              type="checkbox"
              onChange={handleVisibility}
              checked={showPassword}
            />
            <label>Show password</label>
          </div>
        </section>
        {formFilled === false ? (
          <button className="login__right__form__btn--notactive">Login</button>
        ) : (
          <button className="login__right__form__btn">Login</button>
        )}
      </form>
    </>
  );
};

export default LoginForm;
