import React from "react";
import "./Quiz.css";
import { getQuizQuestion } from "./Util";
export const Quiz = () => {
  const [quiz, setQuiz] = React.useState([]);
  React.useEffect(() => {
    // setQuiz(getQuizQuestion);
    setQuiz(getQuizQuestion);
    // console.log(getQuizQuestion(), "LLL");
  }, []);
  console.log(quiz);
  return (
    <div>
      <h1
        style={{
          fontSize: "3rem ",
          justifyContent: "center",
          display: "flex",
          textAlign: "center",
          margin: 10,
        }}
      >
        Quiz App
      </h1>
      <div className="quiz_container">Question comes from Trivia</div>
    </div>
  );
};
