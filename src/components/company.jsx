import React from "react";
import { Link } from "react-router-dom";

const Company = () => {
  return (
    <main className="empty">
      <h2 className="empty__title">This page is currently unavailable</h2>
      <Link to="/">
        <button className="empty__btn">Return to main page</button>
      </Link>
    </main>
  );
};

export default Company;
