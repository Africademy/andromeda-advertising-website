import React from "react";
import { Link } from "react-router-dom";
import anime from "animejs/lib/anime.es";

const LoggedIn = () => {
  return (
    <main className="loggedin">
      <div className="loggedin__text">
        <h2 className="loggedin__text__title">Success!</h2>
        <p className="loggedin__text__description">You are now logged in</p>
      </div>
      <Link to="/">
        <button className="loggedin__btn">Go back to Home Page</button>
      </Link>
    </main>
  );
};

export default LoggedIn;
