import React from "react";
import { Quiztype } from "./types";
type Props = {
  quiz: Quiztype[];
};
const QuizCard = (props: Props) => {
  console.log(props.quiz, "props");
  return (
    <div className="quiz-container">
      <h2>Quiz Question Test</h2>
      <ul>
        <li>
          <input type="text" />
          <label htmlFor=""></label>
        </li>
      </ul>
      <p></p>
    </div>
  );
};
export default QuizCard;
