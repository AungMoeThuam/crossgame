import { useEffect, useState } from "react";
import React from "react";
function Home() {
  let [name, setName] = useState("aung");

  const [score, setScore] = useState([
    { name: "aung", score: 0 },
    { name: "lin", score: 0 },
  ]);

  const circle = `<svg
stroke="currentColor"
fill="currentColor"
stroke-width="0"
viewBox="0 0 512 512"
height="3em"
width="3em"
xmlns="http://www.w3.org/2000/svg"
>
<path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
</svg>`;
  const cross = `<svg stroke="currentColor" 
  fill="currentColor" 
  stroke-width="0" version="1.1"
   viewBox="0 0 16 16" height="3em"
    width="3em" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.854 12.854c-0-0-0-0-0-0l-4.854-4.854 4.854-4.854c0-0 
    0-0 0-0 0.052-0.052 0.090-0.113 0.114-0.178 0.066-0.178 0.028-0.386-0.114-0.529l-2.293-2.293c-0.143-0.143-0.351-0.181-0.529-0.114-0.065 
    0.024-0.126 0.062-0.178 0.114 0 0-0 0-0 0l-4.854 4.854-4.854-4.854c-0-0-0-0-0-0-0.052-0.052-0.113-0.090-0.178-0.114-0.178-0.066-0.386-0.029-0.529 0.114l-2.293 2.293c-0.143 0.143-0.181 0.351-0.114 0.529 0.024 0.065 0.062 0.126 0.114 0.178 0 0 0 0 0 0l4.854 4.854-4.854 4.854c-0 0-0 0-0 0-0.052 0.052-0.090 0.113-0.114 0.178-0.066 0.178-0.029 0.386 0.114 0.529l2.293 2.293c0.143 0.143 0.351 0.181 0.529 0.114 0.065-0.024 0.126-0.062 0.178-0.114 0-0 0-0 0-0l4.854-4.854 4.854 4.854c0 0 0 0 0 0 0.052 0.052 0.113 0.090 0.178 0.114 0.178 0.066 0.386 0.029 0.529-0.114l2.293-2.293c0.143-0.143 0.181-0.351 0.114-0.529-0.024-0.065-0.062-0.126-0.114-0.178z"></path></svg>`;
  const arr = ["h", "h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8"];

  function check(tagId) {
    const className = "m-1 col-3 bg-warning";

    if (tagId.className === className) return true;
  }
  function check2(tagId) {
    const className = "m-1 col-3 bg-success";
    if (tagId.className === className) return true;
  }
  function reSet(array) {
    array.forEach((element) => {
      document.getElementById(element).className = "m-1 col-3 bg-primary";
      document.getElementById(element).innerHTML = "";
    });
  }

  function action() {
    const g = document.createElement("h1");
    g.id = "sh";
    g.innerText = `${name} is win!`;

    const a = document.getElementById("show");
    a.appendChild(g);
    setScore(
      score.map((a) => {
        if (a.name === name) a.score += 1;
        return a;
      })
    );
    reSet(arr);
  }

  function changeColor(id) {
    const ele = document.getElementById(id);

    const [h, h1, h2, h3, h4, h5, h6, h7, h8] = arr.map((a) =>
      document.getElementById(a)
    );

    if (name == "aung") {
      ele.className = "m-1 col-3 bg-warning";
      const e = document.getElementById("show");

      ele.innerHTML = circle;
      if (e.hasChildNodes() === true) {
        e.removeChild(document.getElementById("sh"));
      }

      if (check(h) && check(h1) && check(h2)) {
        action();
      } else if (check(h3) && check(h4) && check(h5)) {
        action();
      } else if (check(h6) && check(h7) && check(h8)) {
        action();
      } else if (check(h) && check(h3) && check(h6)) {
        action();
      } else if (check(h1) && check(h4) && check(h7)) {
        action();
      } else if (check(h2) && check(h5) && check(h8)) {
        action();
      } else if (check(h) && check(h4) && check(h8)) {
        action();
      } else if (check(h2) && check(h4) && check(h6)) {
        action();
      } else {
        setName("lin");
      }
    } else if (name == "lin") {
      ele.className = "m-1 col-3 bg-success";
      ele.innerHTML = cross;

      if (check2(h) && check2(h1) && check2(h2)) {
        action();
      } else if (check2(h3) && check2(h4) && check2(h5)) {
        action();
      } else if (check2(h6) && check2(h7) && check2(h8)) {
        action();
      } else if (check2(h) && check2(h3) && check2(h6)) {
        action();
      } else if (check2(h1) && check2(h4) && check2(h7)) {
        action();
      } else if (check2(h2) && check2(h5) && check2(h8)) {
        action();
      } else if (check2(h) && check2(h4) && check2(h8)) {
        action();
      } else if (check2(h2) && check2(h4) && check2(h6)) {
        action();
      } else {
        setName("aung");
      }
    }
  }
  useEffect(() => {
    const a = document.getElementById("show");

    console.log("a", a.hasChildNodes());
  });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: " column ",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="container"
    >
      <h1>နှစ်ပေါက်တစ်ပေါက်ဂိမ်း</h1>
      {score.map((a) => (
        <h1>
          {a.name} : {a.score}
        </h1>
      ))}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div id="show"></div>
        <div style={{ width: "400px" }} className="row">
          {arr.map((a) => (
            <div
              onClick={() => changeColor(a)}
              id={a}
              style={{
                height: "10vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="m-1 col-3 bg-primary"
            ></div>
          ))}
        </div>
        <button onClick={() => reSet(arr)} className="btn btn-warning">
          Reset
        </button>
      </div>
    </div>
  );
}

export default Home;
