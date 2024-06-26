import React from "react";

function Nav({ link, setscreen }) {
  return (
    <>
      <nav className="navbar navbar-light bg-light p-4">
        <p className="display-4 text-secondary fw-bold text-center">
          Yene<span className="opacity-50 text-danger">Base</span>{" "}
          <sub className="fs-6 text-danger fw-bold">v1.0</sub>{" "}
        </p>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a
              class="nav-link"
              className="fs-5 text-decoration-none"
              onClick={() => setscreen(true)}
              style={{ cursor: "pointer" }}
            >
              {link}
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
