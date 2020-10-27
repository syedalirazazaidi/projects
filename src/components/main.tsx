import React, { useEffect } from "react";
import calculatorTime from "./Helper/helper";
import "./main.css";

export default function Main() {
  const [timeArray, setTimeArray] = React.useState<Array<number | string>>([]);
  useEffect(() => {
    let tmArray = calculatorTime();
    setTimeArray(tmArray);
  }, [timeArray]);

  return (
    <div className="countdown-container">
      <div className="countdown-el days-c">
        <p className="big-text">{timeArray[0]}</p>
        <span>Days</span>
      </div>
      <div className="countdown-el hours-c">
        <p className="big-text">{timeArray[1]}</p>
        <span className="big-textH">Hours</span>
      </div>
      <div className="countdown-el minute-c">
        <p className="big-text">{timeArray[2]}</p>
        <span>Minute</span>
      </div>

      <div className="countdown-el second-c">
        <p className="big-text">{timeArray[3]}</p>
        <span>Second</span>
      </div>
      <div style={{ position: "absolute", bottom: -50, height: 30 }}></div>
    </div>
  );
}
