import React, { Profiler, useEffect, useState } from "react";
import uuid from "./uuid";
import { simubase_መረጃ_አስገባ } from "./Engine";
import Profile from "./Profile";
import Board from "./Board";
import Nav from "./Nav";

function SimuBase() {
  const [aknowlegment, setaknowlegment] = useState("");

  // for inserting data
  const [InsertData, setInsertData] = useState("");
  const [InsertDataName, setInsertDataName] = useState("");

  // for getting data
  const [FetchData, setFetchData] = useState("");
  const [FetchDataName, setFetchDataName] = useState("");

  // for deleting data
  const [DeleteData, setDeleteData] = useState("");
  const [DeleteDataName, setDeleteDataName] = useState("");

  // for updating data
  const [UpdateData, setUpdateData] = useState("");
  const [UpdateDataName, setUpdateDataName] = useState("");

  //   useEffect(() => {
  //     const send = [
  //       { id: uuid(), name: "muller" , age: "23" },
  //       { id: uuid(), name: "king", age: "22" },
  //     ];
  //     simubase_መረጃ_አስገባ("sampleSameBase" , JSON.stringify(send));
  //     const newJson = JSON.parse(simubase_መረጃ_አምጣ("sampleSameBase"));
  //     setaknowlegment(newJson[0].name);
  //   }, []);

  //   states to controll the inputs

  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [work, setwork] = useState("");
  const [salary, setsalary] = useState("");
  const [btn, setbtn] = useState(false);

  const handleSave = () => {
    try {
      // prepare the data to send
      const userData = [
        { fname, lname, email, password, work, salary },
        // { fname, lname, email, password, work, salary },
      ];

      // convert the data into JSON format
      const NewUserData = JSON.stringify(userData);

      // send the actual by calling the endpoint
      simubase_መረጃ_አስገባ("userInfo", NewUserData);
      alert("successfully added !");
      setfname("");
      setlname("");
      setemail("");
      setpassword("");
      setwork("");
      setsalary("");
      setbtn(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Nav link="Home" path="/home" />
      <Board />
    </>
  );
}

export default SimuBase;
