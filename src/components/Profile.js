import React, { useState } from "react";
import SimuBase from "./SimuBase";
import { simubase_መረጃ_አምጣ } from "./Engine";

function Profile() {
  const [home, sethome] = useState(false);
  const getData = JSON.parse(simubase_መረጃ_አምጣ("userInfo"));

  return (
    <>
      {/* {home 
    :
    <SimuBase />
    ? */}
      {getData?.length > 1 ? (
        getData &&
        getData.map((data) => (
          <>
            <h3>{data.fname}</h3>
            <h3>{data.lname}</h3>
            <h3>{data.email}</h3>
            <h3>{data.password}</h3>
            <h3>{data.work}</h3>
            <h3>{data.salary}</h3>
          </>
        ))
      ) : (
        <>
          <h3>{getData[0].fname}</h3>
          <h3>{getData[0].lname}</h3>
          <h3>{getData[0].email}</h3>
          <h3>{getData[0].password}</h3>
          <h3>{getData[0].work}</h3>
          <h3>{getData[0].salary}</h3>
        </>
      )}
      <button className="btn btn-primary" onClick={() => sethome(true)}>
        Back To Home
      </button>
    </>
  );
}

export default Profile;
