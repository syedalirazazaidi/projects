import React from "react";
import "../main";
type Props = {
  setTime: Function;
  // handlePlay:Function
};

export default function Control(props: Props) {
  const [intervalId, setIntervalId] = React.useState<number>(0);
 const {setTime} =props
  const handlePlayButton = () => {
    let secoInterval: any = setInterval(() => {
      return setTime((previousState: number) => previousState + 1);
    }, 1000);
    setIntervalId(secoInterval);
  };
  const handleStopButton = () => {
    clearInterval(intervalId);
  };
  const handleResetButton = () => {
    clearInterval(intervalId);
    setTime(0);
  };
  return (
    <div >
      <button
        style={{
          width: 100,
          height: 50,
          padding: 7,
          color: "#fff",
          borderRadius: 5,
          backgroundColor: "green",
          border:'none',
          margin:15,
          cursor:'pointer'
        }}
        onClick={handlePlayButton}
      >
        Play
      </button>
      <button
        style={{
          width: 100,
          height: 50,
          padding: 7,
          color: "#fff",
          borderRadius: 5,
          backgroundColor: "red",
          border:'none',
          margin:15,
          cursor:'pointer'
        }}
        onClick={handleStopButton}
      >
        Stop
      </button>
      <button
        style={{
          width: 100,
          height: 50,
         margin:15,
          color: "#fff",
          padding: 7,
          borderRadius: 5,
          backgroundColor: "orange",
          border:'none',
          cursor:'pointer'
        }}
        onClick={handleResetButton}
      >
        Reset
      </button>
    </div>
  );
}
