import "./quiz.css";
import BasicQuestion from "./BasicQuestion/BasicQuestion";
import ProgressBar from "./ProgressBar/ProgressBar";
import AnswersApiService from "../../services/answers-api-service";
import { useEffect, useState } from "react";

export default function Quiz({
  fetchNewQuestions,
  questions,
  MOCK_USER_ID,
  answersArray,
  addAnswer,
  questionIndex,
  incrementQuestionIndex,
}) {
  const [answersCounter, setAnswersCounter] = useState(0);

  // AnswersApiService.postAnswers(answersArray);
  //once progress bar is full

  //TODO post distances
  //TODO pop up ***play again** or go to **heart button in brainmates**
  //When pressed play again, load more questions
  useEffect(() => {
    if (questions.length < 10){
      fetchNewQuestions();
    }
    
  }, [questions]);

  return (
    <div className="quiz-container">
      <ProgressBar progressPercentage={(questionIndex / questions.length) * 100} />
      <BasicQuestion
        question={questions[questionIndex] ? questions[questionIndex] : ""}
        questionsLength={questions.length}
        MOCK_USER_ID={MOCK_USER_ID}
        setAnswersCounter={setAnswersCounter}
        answersCounter={answersCounter}
        answersArray={answersArray}
        addAnswer={addAnswer}
        incrementQuestionIndex={incrementQuestionIndex}
      />
      <button
        onClick={() => {
          incrementQuestionIndex();
        }}
      >
        skip
      </button>
    </div>
  );
}
