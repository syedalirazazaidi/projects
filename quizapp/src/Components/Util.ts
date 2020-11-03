import { Quiztype } from './types';
import { QuizData } from "./../Data/QuizData";

const shuffleArray=(array:any[])=>[...array].sort(()=>Math.random()-0.5)

export const getQuizQuestion = ():Quiztype[] => {
  const getData = QuizData;
  const data:Quiztype[] = getData;
  const res= data.map((questionObj:Quiztype,ind:number)=>{
    return{
      question:questionObj.question,
      answers:shuffleArray(questionObj.answers.concat(questionObj.correct)),
      correct:questionObj.correct
    }
  })
  return res
  
};
