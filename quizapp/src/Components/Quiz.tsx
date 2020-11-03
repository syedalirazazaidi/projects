import React from "react";
import { getQuizQuestion } from "./Util";
import { Quiztype } from "./types";
import "./Quiz.css";
import QuizCard from "./QuizCard";
export const Quiz = () => {
  const [quiz, setQuiz] = React.useState<Quiztype[]>([]);
  let [questionA, setnextQuestion] = React.useState(0);
  let [score, setScore] = React.useState(0);

  const nextQuestion = (e: React.FormEvent<EventTarget>, ans: string) => {
    e.preventDefault();
    const cuQuestion: Quiztype = quiz[questionA];
    console.log(cuQuestion.correct);
    if (ans === cuQuestion.correct) {
      setScore(++score);
    }
    if (questionA !== quiz.length - 1) {
      setnextQuestion(questionA + 1);
    } else {
      alert("YOUR SCORE = " + score + " OUT OFF = " + quiz.length);
      setnextQuestion(0);
      setScore(0);
    }
  };

  React.useEffect(() => {
    async function fetchData() {
      const question: Quiztype[] = await getQuizQuestion();
      setQuiz(question);
    }
    fetchData();
  }, []);
  if (!quiz.length) return <div>loading...</div>;
  return (
    <div>
      <QuizCard
        option={quiz[questionA].answers}
        question={quiz[questionA].question}
        nextQuestion={nextQuestion}
      />
    </div>
  );
};
