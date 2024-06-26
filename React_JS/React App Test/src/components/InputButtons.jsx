// import styles from "./style.module.css";

// import { useState } from "react";

function InputButtons() {
  // const [count, setCount] = useState(false);

  // const buttonStyle = {
  //   backgroundColor: "red",
  //   color: "pink",
  // };

  // function increase() {
  //   setCount(!count);
  // }

  return (
    <div>
      <div
        style={{
          height: 500,
          width: 200,
          backgroundColor: "pink",
          // border: "1px solid black",
          boxShadow: "0px -10px 10px 2px grey",
          // boxShadow: "X-axis y-axis blur spread color",
        }}
      >
        <p
          style={{
            textShadow: "5px 5px 1px black",
          }}
        >
          adsdasdad
        </p>
      </div>
    </div>
  );
}

function InputButton2() {
  return (
    <div>
      <button> hi </button>
      <h1>dasfdsad</h1>
    </div>
  );
}
function InputButton3() {
  return (
    <div>
      <button> hi </button>
      <h1>dasfdsad</h1>
    </div>
  );
}

function InputButton4() {
  return (
    <div>
      <button> hi </button>
      <h1>dasfdsad</h1>
    </div>
  );
}

export default InputButtons;

export { InputButton2, InputButton3, InputButton4 };

{
  /* {count === true ? "TRUE" : "FALSE"}
<input placeholder="hello " />
<button
  style={{
    backgroundColor: count === true ? "red" : "blue",
    color: "pink",
  }}
>
  hi
</button>
<button onClick={increase}> increase </button> */
}
