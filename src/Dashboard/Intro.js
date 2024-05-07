import React from "react";

function Intro() {
  return (
    <>
      <div className="row m-2">
        <div className="col-md-12">
          <p className="display-3 fw-bold" style={{ color: "rgb(72,204,55)" }}>
            Introduction
          </p>
          <p className="fs-5 text-lead fw-normal">
            Welcome to YeneBase, the hassle-free solution for managing your data
            without the need for complex database configurations or connection
            strings. With YeneBase, you can easily manipulate your data using
            popular HTTP methods such as GET, POST, DELETE, and UPDATE without
            any prior setup.. <br />
            <br />
            By using YeneBase you can manipulate your data by making the most
            popular HTTP methods like: <b>GET</b> , <b>POST</b> , <b>DELETE</b>{" "}
            , <b>UPDATE </b>
            with out any pre configured setting or <b>connection</b> url.
            <br />
            <br />
          </p>
          <p className="display-6 fw-bold text-secondary">Key Features:</p>
          <ul className="fs-5">
            <li>No signup or signin process</li>
            <li>No subscription, it's free</li>
            <li>No downloading any file</li>
            <li>No pre configured setting</li>
          </ul>
          <p className="fs-4 text-lead"></p>
        </div>
        <p className="display-6 fw-bold text-secondary">Getting Started: </p>
        <h4 className="text-muted">
          {" "}
          To begin using YeneBase, follow these simple steps:
        </h4>{" "}
        <br />
        <ol className="ms-3 fs-5">
          <li>
            <p className="fs-5">
              {" "}
              Make a POST request: Start by making a POST request to YeneBase to
              initialize your data storage. This is the first step to get your
              database up and running.
            </p>
          </li>
          <li>
            Explore CRUD Operations:
            <ul>
              <li>GET Request: Retrieve data from your storage.</li>
              <li>POST Request: Add new data to your storage.</li>
              <li>DELETE Request: Remove data from your storage.</li>
              <li>UPDATE Request: Modify existing data in your storage.</li>
            </ul>
          </li>
          <li>
            <b>
              {" "}
              Documentation: Refer to the specific documentation for each CRUD
              operation to learn how to use them effectively.
            </b>
          </li>
        </ol>
      </div>
    </>
  );
}

export default Intro;
