import React from "react";

type Props = {
  option: string[];
  question: string;
  nextQuestion: (e: React.FormEvent<EventTarget>, ans: string) => void;
};

const QuizCard = (props: Props) => {
  const [choseAnswer, setChoseAnswer] = React.useState("");
  const handleSelection = (e: any) => {
    setChoseAnswer(e.target.value);
  };
  return (
    <div>
      <div className="quiz-container">
        <div className="quiz-header">
          <h1>Quiz Apps</h1>
          <h2>Quiz Question Test</h2>
          <div style={{ marginTop: 20 }}>
            <div>{props.question}</div>
            <form
              onSubmit={(e: React.FormEvent<EventTarget>) =>
                props.nextQuestion(e, choseAnswer)
              }
            >
              {props.option.map((opt: string, ind: number) => {
                return (
                  <ul key={ind} style={{ marginTop: 5 }}>
                    <li>
                      <label>
                        <input
                          style={{ cursor: "pointer", margin: 10 }}
                          type="radio"
                          name="opt"
                          required
                          value={opt}
                          checked={choseAnswer === opt}
                          onChange={handleSelection}
                        />
                        <label
                          style={{ padding: "1rem 5rem" }}
                          htmlFor="answers"
                        >
                          {opt}
                        </label>
                      </label>
                    </li>
                  </ul>
                );
              })}

              <button
                className="bttn"
                style={{
                  backgroundColor: "#8e44ad",
                  marginTop: ".5rem",
                }}
                // onClick={nextQu}
              >
                Submit
              </button>
            </form>
          </div>{" "}
        </div>

        {/* <button className="btn_next" onClick={nextQuestion}>
        Next
      </button> */}
      </div>
    </div>
  );
};
export default QuizCard;
