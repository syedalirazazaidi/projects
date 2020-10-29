import { Quiztype } from './types';
import { QuizData } from './../Data/QuizData';

export const getQuizQuestion= async() => {
    const getData = QuizData
    const data=await(await (getData))
    return data
    // return data.map((question:Quiztype)=>({
    //     ...question,
    //     answers:([...question.answers,question.correct])
    // }))
}
