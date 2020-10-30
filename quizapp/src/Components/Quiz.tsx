import React from "react";
import "./Quiz.css";
import { getQuizQuestion } from "./Util";
import { Quiztype } from "./types";
import QuizCard from "./QuizCard";
export const Quiz = () => {
  const [quiz, setQuiz] = React.useState<Quiztype[]>([]);
  React.useEffect(() => {
    setQuiz(getQuizQuestion);
    getQuizQuestion();
  }, []);
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
      <div>
        <QuizCard quiz={quiz} />
      </div>
    </div>
  );
};
