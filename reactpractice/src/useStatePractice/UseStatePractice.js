import React from "react";
import { useState } from "react";
import style from "./UseStatePracticeStyle";

// start main function
function UseStatePractice(props) {
  // Start student list

  const [student, useStudent] = useState([
    {
      name: "Ahmad",
      roll: "001",
      class: "One",
    },
    {
      name: "Abubakar",
      roll: "002",
      class: "Two",
    },
    {
      name: "Umar",
      roll: "003",
      class: "Three",
    },
    {
      name: "Usman",
      roll: "004",
      class: "Four",
    },
  ]);

  // End student list

  const [runTime, setRuntime] = useState("");
  const [numCount, setNumCount] = useState(0);

  // console.log(student);
  return (
    <div>
      <div
        style={
          runTime === "redClr"
            ? style.redClr
            : runTime === "greenClr"
            ? style.greenClr
            : style.orangeClr
        }
      >
        <p
          style={{
            fontSize: "50px",
            color: "#000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Let's play color game
        </p>
      </div>
      <div style={style.btnsCont}>
        <button
          style={runTime === "redClr" ? style.redBtn : style.orangeBtn}
          onClick={() => setRuntime("redClr")}
        >
          Red Clr
        </button>
        <button
          style={runTime === "greenClr" ? style.greenBtn : style.orangeBtn}
          onClick={() => setRuntime("greenClr")}
        >
          Green Clr
        </button>
      </div>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          onClick={() => setNumCount(numCount - 1)}
          style={style.orangeBtn}
        >
          <p>-</p>
        </button>
        <div>
          <p>{numCount}</p>
        </div>
        <button
          onClick={() => setNumCount(numCount + 1)}
          style={style.orangeBtn}
        >
          <p>+</p>
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "-30px",
        }}
      >
        <button onClick={() => setNumCount(0)} style={style.orangeBtn}>
          Reset Value
        </button>
      </div>
      <hr />
      {/* -------------------------------------------------------- */}

      <table>
        <tr>
          <th>Name : </th>
          <th>Roll : </th>
          <th>Class : </th>
        </tr>
        {student.map((student, Sr) => {
          return (
            <tr>
              <td>
                {"Sr : "}
                {Sr}
              </td>
              <td>{student.name}</td>
              <td>{student.roll}</td>
              <td>{student.class}</td>
            </tr>
          );
        })}
      </table>
      {/* end main fun */}
    </div>
  );
}
export default UseStatePractice;
