import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import {
  simubase_መረጃ_ፍጠር,
  simubase_መረጃ_አስገባ,
  simubase_መረጃ_ደልዝ,
  simubase_መረጃ_አጥፋ,
  simubase_መረጃ_አምጣ,
} from "./Engine";
import trial from "../Trial/trial1";

function Main() {
  const [DBname, setDBname] = useState("");
  const [userQuery, setuserQuery] = useState("");
  const [selectedQuery, setselectedQuery] = useState("");
  const [QuryDescription, setQuryDescription] = useState("");

  // localStorage Initializations
  let savedDB = JSON.parse(localStorage.getItem("CreatedDB")) || [];

  // creating database
  const handleCreateDB = (e) => {
    // to prevent the default behaviours of the page
    try {
      //   simubase_መረጃ_ፍጠር(DBname);
      alert("Database created successfully: " + DBname);
      savedDB.push(DBname);
      localStorage.setItem("CreatedDB", JSON.stringify(savedDB));
      setDBname("");
    } catch (error) {
      console.log(error.message);
    }
  };

  // delete the specific database
  const handleDeleteDB = (db) => {
    let DeleteDB = savedDB.filter((database) => database != db);
    localStorage.setItem("CreatedDB", JSON.stringify(DeleteDB));
    alert("database deleted successfully !");
    window.location.reload();
  };

  // INSERT LOCALSTORAGE EXECUTER FUNCTION
  // const handleToExcuteDB = (db) => {
  //   console.log(`window.localStorage.getItem("${db}")`);
  // }

  // generate the datatbase query
  const handleGenerateQuery = () => {
    // alert(userQuery);
    switch (userQuery) {
      case "Default Query":
        alert("please, select the correct query !");
        break;
      case "Select Query":
        setselectedQuery(
          savedDB?.length &&
            savedDB.map((db, index) => (
              <div className="mb-3">
                {" "}
                <span style={{ userSelect: "none" }}>
                  Query {index + 1} :
                </span>{" "}
                window.localStorage.getItem("{db}");
                {/* <button className="btn btn-primary ms-5" onClick={ () => handleToExcuteDB(db) }>Excute</button> */}
              </div>
            ))
        );
        setQuryDescription(
          "copy this query and paste in your codebase, MAKE SURE PARSE IT !"
        );
        break;
      case "Insert Query":
        setselectedQuery(
          savedDB?.length &&
            savedDB.map((db, index) => (
              <div className="mb-3">
                {" "}
                <span style={{ userSelect: "none" }}>
                  Query {index + 1} :
                </span>{" "}
                window.localStorage.setItem("{db}" ,{" "}
                {"JSON.stringify(YOUR_ACTUAL_DATA)"});
              </div>
            ))
        );
        setQuryDescription(
          "you need pass YOUR_ACTUAL_DATA as a second argument and must be stringify first !"
        );
        break;
      case "Update Query":
        setselectedQuery(
          savedDB?.length &&
            savedDB.map((db, index) => (
              <div className="mb-3">
                {" "}
                <span style={{ userSelect: "none" }}>
                  Query {index + 1} :
                </span>{" "}
                window.localStorage.setItem("{db}" , {"YOUR_UPDATED_VALUE"});
              </div>
            ))
        );
        setQuryDescription(
          "first fetch all data and then update the specific data within it, REMEMBER BEFORE MAKE UPDATE REQUEST MAKE IT STRINGIFY YOUR NEW VALUE !"
        );
        break;
      case "Delete Specific Query":
        // simubase_መረጃ_አጥፋ();
        setselectedQuery(
          "let data = JSON.parse(localStorage.getItem('myData'));" +
            "\n" +
            "delete data.key;" +
            "\n" +
            "localStorage.setItem('myData', JSON.stringify(data));"
        );
        setQuryDescription(
          "To Delete the specific part of the database use this, MAKE SURE YOU WANNA DELETE that specific one !"
        );
        break;
      case "Delete All Query":
        setselectedQuery(
          savedDB?.length &&
            savedDB.map((db, index) => (
              <div className="mb-3">
                {" "}
                <span style={{ userSelect: "none" }}>
                  Query {index + 1} :
                </span>{" "}
                localStorage.removeItem("{db}");
              </div>
            ))
        );
        setQuryDescription(
          "To Delete the entire database use this, MAKE SURE YOU WANNA DELETE !"
        );
        break;
      default:
        alert("nothing make a sense for now try again !");
    }
  };

  return (
    <>
      {/* navigation bar */}
      <Nav link="Doc" path="/doc" />

      {/* main banner */}
      <div className="row mt-5">
        <div className="col-md-11 mx-auto bg-dark rounded">
          <p className="display-2 fw-light text-center text-light p-5">
            Say <span className="text-danger fw-bold">goodbye</span> to tedious
            database configurations and{" "}
            <span className="text-danger fw-bold">hello</span> to seamless data
            manipulation !
          </p>
        </div>
      </div>

      {/* sections */}
      <div className="row my-5">
        <div className="col-md-10 mx-auto bg-light border border-secondary shadow p-5 rounded border-opacity-25">
          <p className="display-4 text-secondary fw-bold">
            Yene
            <span className="text-primary text-decoration-underline">
              Base
            </span>{" "}
          </p>
          <hr />
          <h3 className="text-start text-primary">create your databsae</h3>
          <div className="row">
            <div className="col-md-8">
              <input
                type="text"
                placeholder="Database name"
                className="form-control"
                onChange={(e) => setDBname(e.target.value)}
                value={DBname}
              />
            </div>
            <div className="col-md-4">
              <button
                className="btn btn-primary"
                onClick={() => handleCreateDB()}
              >
                Create
              </button>
            </div>
          </div>
          <h3 className="text-muted mt-5">Your Database Name List: </h3>

          {savedDB?.length ? (
            savedDB.map((db) => (
              <ul>
                <hr />
                <li>
                  <div className="row">
                    <div className="col-md-6 text-start fs-4">{db}</div>
                    <div className="col-md-6 text-end">
                      <button
                        className="btn btn-outline-danger btn-lg"
                        onClick={() => handleDeleteDB(db)}
                      >
                        delete database
                      </button>
                    </div>
                  </div>
                </li>
                <hr />
              </ul>
            ))
          ) : (
            <p className="mt-3 border border-danger border-opacity-25 p-3 rounded bg-danger bg-opacity-25">
              loading untill database created...
            </p>
          )}
          {/* generate the snippets code here */}
          <h3>Generate your Snippets Here: </h3>
          <p className="text-muted">
            {" "}
            <span className="text-danger fw-bold">*</span> copy generated query
            and integrate in to your codebase
          </p>
          <div className="row">
            <div className="col-md-8">
              <select
                name="codeSnippets"
                id="codeSnippets"
                className="form-control"
                onChange={(e) => setuserQuery(e.target.value)}
              >
                <option value="Default Query" selected disabled>
                  Select The Query
                </option>
                <option value="Select Query">Select Query</option>
                <option value="Insert Query">Insert Query</option>
                <option value="Update Query">Update Query</option>
                <option value="Delete Specific Query">
                  {" "}
                  Delete Specific Query{" "}
                </option>
                <option value="Delete All Query"> Delete All Query </option>
              </select>
            </div>
            <div className="col-md-4">
              <button
                className="btn btn-primary"
                onClick={() => handleGenerateQuery()}
              >
                Generate
              </button>
            </div>
          </div>
          {selectedQuery ? (
            <>
              <div className="text-danger ms-1 mt-2 border border-danger p-3 bg-danger bg-opacity-25 border-opacity-25 rounded">
                <span className="fw-bold">Usage</span>: {QuryDescription}
              </div>
              <h4 className="ms-1 mt-3 border border-secondary p-3 rounded ">
                {selectedQuery}
              </h4>
            </>
          ) : (
            <div className="animated-wait">
              <p className="mt-3 ms-1">waiting your query...</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Main;
