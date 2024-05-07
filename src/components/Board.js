import React, { useState } from "react";

// dashboard components
import Intro from "../Dashboard/Intro";
import Get from "../Dashboard/Get";
import Post from "../Dashboard/Post";
import Update from "../Dashboard/Update";
import Delete from "../Dashboard/Delete";
import Conclusion from "../Dashboard/Conclusion";

function Board() {
  const [home, sethome] = useState(true);
  const [about, setabout] = useState(false);
  const [deposite, setdeposite] = useState(false);
  const [loan, setloan] = useState(false);
  const [rule, setrule] = useState(false);
  const [transaction, settransaction] = useState(false);

  return (
    <>
      <div className="row">
        <div className="col-md-3 text-light d-flex flex-column align-items-start justify-content-start ms-2 bg-light p-4">
          <div className="dashboard d-flex align-items-center justify-content-center">
            {/* <img
              src={design}
              alt=""
              className="img-fluid mt-1"
              style={{ width: "50px" }}
            /> */}
            <h3
              className="border-bottom ms-2 fw-bold"
              style={{ color: "rgb(72,204,55)" }}
            >
              {" "}
              Get Started
            </h3>
          </div>
          <div className="h4 my-3" id="DashHome">
            <a
              className="ms-3 text-secondary"
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "rgb(217,141,171)",
              }}
              onClick={() => {
                sethome(true);
                setabout(false);
                setdeposite(false);
                setloan(false);
                setrule(false);
                settransaction(false);
              }}
            >
              <span className="fs-3"></span> Introduction
            </a>
          </div>
          <div className="h4 mb-3">
            <a
              className="ms-3 text-secondary"
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "rgb(217,141,171)",
              }}
              onClick={() => {
                sethome(false);
                setabout(true);
                setdeposite(false);
                setloan(false);
                setrule(false);
                settransaction(false);
              }}
            >
              <span className="fs-3"> </span> Get Request
            </a>
          </div>
          <div className="h4 mb-3">
            <a
              className="ms-3 text-secondary"
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "rgb(217,141,171)",
              }}
              onClick={() => {
                sethome(false);
                setabout(false);
                setdeposite(true);
                setloan(false);
                setrule(false);
                settransaction(false);
              }}
            >
              <span className="fs-3"></span> Post Request
            </a>
          </div>
          <div className="h4 mb-3">
            <a
              className="ms-3 text-secondary"
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "rgb(217,141,171)",
              }}
              onClick={() => {
                sethome(false);
                setabout(false);
                setdeposite(false);
                setloan(true);
                setrule(false);
                settransaction(false);
              }}
            >
              <span className="fs-3"> </span> Delete Request
            </a>
          </div>
          <div className="h4 mb-3">
            <a
              className="ms-3 text-secondary"
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "rgb(217,141,171)",
              }}
              onClick={() => {
                sethome(false);
                setabout(false);
                setdeposite(false);
                setloan(false);
                setrule(true);
                settransaction(false);
              }}
            >
              <span className="fs-3"></span> Update Request
            </a>
          </div>
          <div className="h4 mb-3">
            <a
              className="ms-3 text-secondary"
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "rgb(217,141,171)",
              }}
              onClick={() => {
                sethome(false);
                setabout(false);
                setdeposite(false);
                setloan(false);
                setrule(false);
                settransaction(true);
              }}
            >
              <span className="fs-3"></span> Conclusion
            </a>
          </div>
        </div>
        <div className="col-md-8">
          {/* home */}
          {home && <Intro />}

          {/* about */}
          {about && <Get /> }

          {/* deposite */}
          {deposite && <Post />}

          {/* loan */}
          {loan && <Delete />}

          {/* rule */}
          {rule && <Update />}

          {/* transaction */}
          {transaction && <Conclusion />}
        </div>
      </div>
    </>
  );
}

export default Board;
