import React, { useEffect } from "react";
import Control from "./Helper/Control";
import calculatorTime from "./Helper/helper";
import "./main.css";

export default function Main() {
  const [tmsecond, setTime] = React.useState<number>(0);
  const [timeArray, setTimeArray] = React.useState<Array<number | string>>([]);
  useEffect(() => {
    let tmArray: Array<number | string> = calculatorTime(tmsecond);
    setTimeArray(tmArray);
  }, [tmsecond]);
  console.log(timeArray,"HHHHH")
  return (
    <div className="countdown-container">
      <div className="countdown-el days-c">
        <p className="big-text">{timeArray[0]}</p>
        {/* <span>days</span> */}
      </div>
      <div className="countdown-el hours-c">
        <p className="big-text">{timeArray[1]}</p>
        {/* <span className="big-textH">hours</span> */}
      </div>
      <div className="countdown-el minute-c">
        <p className="big-text">{timeArray[2]}</p>
        <span>minute</span>
      </div>

      {/* <div className="countdown-el second-c">
                <p className="big-text">0</p>
                <span>second</span>
            </div> */}
      <div style={{ position: "absolute", bottom: -50, height: 30 }}>
        <Control setTime={setTime} />
      </div>
    </div>
  );
}
