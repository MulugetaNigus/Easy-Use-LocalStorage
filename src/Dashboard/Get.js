import React from "react";

function Get() {
  return (
    <>
      <div className="row m-2">
        <div className="col-md-12">
          <p className="display-3 fw-bold" style={{ color: "rgb(72,204,55)" }}>
            Get Request
          </p>
          <p className="fs-4 text-lead fw-normal">
            YeneBase: GET Request Documentation Introduction: In YeneBase, the
            GET request is used to retrieve data from your storage. This
            documentation will guide you through the process of making GET
            requests and handling the response data.
          </p>
          <br />
          <b className="fs-4 text-muted">End-Points</b>
          <p className="fs-5">
            The endpoint for making a GET request to YeneBase is:
          </p>
          <h1>get request img simulation here</h1>
          <br />
          <b className="fs-4 text-muted">Request Parameters:</b>
          <p className="fs-5">request paramets here if there is....</p>
          <br />
          <b className="fs-4 text-muted">Example Request:</b>
          <p className="fs-5">
            To retrieve data from your storage, simply make a GET request to the
            /data endpoint.
          </p>
          <h1>get request img simulation here</h1>
          <br />
          <b className="fs-4 text-muted">Response : </b>
          <p className="fs-5">
            Upon successful retrieval of data, the server will respond with a
            JSON object containing the requested data.
          </p>
          <h1>success request img simulation here</h1>
          <br />
          <br />
          <b className="fs-3 text-muted">Conclusion</b>
          <p className="fs-5">
            Using the GET request in YeneBase, you can easily retrieve data from
            your storage without any hassle. Simply make a GET request to the
            /data endpoint and handle the response data as needed.
          </p>
        </div>
      </div>
    </>
  );
}

export default Get;
