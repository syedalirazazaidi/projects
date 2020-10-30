export type Quiztype = {
  question: string;
  answers: {
    a: number|string
    b: number|string
    c: number|string
    d: number|string
    e: number|string
}[];
  correct: string;
};
