import React from "react";
import { useStopwatch } from "react-timer-hook";
import { AuthButtonStyled } from "./styles";
function MyStopwatch() {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false });
  const timeWhenstop = hours;

  return (
    <div style={{ backgroundColor: "#eee0e0", textAlign: "center" }}>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br> <br></br> <br></br> <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br> <br></br> <br></br> <br></br>
      <br></br>
      <h1>Focus</h1>
      <div style={{ backgroundColor: "#eee0e0", fontSize: "100px" }}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
      <p>{isRunning ? "Running" : "Not running"}</p>
      <AuthButtonStyled onClick={start}>Start</AuthButtonStyled>
      <AuthButtonStyled onClick={pause}>Pause</AuthButtonStyled>
      <AuthButtonStyled onClick={reset}>Reset</AuthButtonStyled>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br> <br></br> <br></br> <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br> <br></br> <br></br> <br></br>
      <br></br>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ backgroundColor: "#eee0e0", textAlign: "center" }}>
      <MyStopwatch />
    </div>
  );
}
