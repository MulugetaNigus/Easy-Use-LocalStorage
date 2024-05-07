import React from "react";

function Delete() {
  return (
    <>
      <div className="row m-2">
        <div className="col-md-12">
          <p className="display-3 fw-bold" style={{ color: "rgb(72,204,55)" }}>
            Delete Request
          </p>
          <h5 className="border border-light fw-bold bg-secondary border-opacity-25 bg-opacity-25 shdaow rounded p-2 my-4">
            <span className="h4">Base URL</span> :
            http://www.YeneBase/getResourse/your_table_name
          </h5>
          <p className="fs-4 text-lead fw-normal">
            To get started with yeneBase <b>Get</b> request you have to follow
            the following rules : <br /> <br />
            1. You have to create your table name first, <br />
            this step cover or complate when you make your first post request so{" "}
            <b>dont worry</b> !<br />
            <p>
              <span className="text-danger">To Create Your Table Name</span> :
              http://www.YeneBase/getResourse/your_table_name
            </p>
            2. then you can make a GET request by this endpoint and your table
            name <br />
            <b>
              http://www.YeneBase/getResourse/your_table_name_created_in_step1
            </b>
          </p>
        </div>
      </div>
    </>
  );
}

export default Delete;
