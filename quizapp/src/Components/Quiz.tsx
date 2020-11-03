import React from "react";
import { getQuizQuestion } from "./Util";
import { Quiztype } from "./types";
import "./Quiz.css";
import QuizCard from "./QuizCard";
export const Quiz = () => {
  const [quiz, setQuiz] = React.useState<Quiztype[]>([]);
  const [questionA, setnextQuestion] = React.useState(0);
  const [selectanswer, setselectanswer] = React.useState("");

  const nextQuestion = (e: React.FormEvent<EventTarget>, ans: string) => {
    e.preventDefault();
    console.log(ans, "ANSWER");
    if (questionA !== quiz.length - 1) {
      let ans = 0;
      setnextQuestion(questionA + 1);
    } else {
      alert("ji");
      setnextQuestion(0);
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
        // handleSelection={handleSelection}
      />
    </div>
  );
};
