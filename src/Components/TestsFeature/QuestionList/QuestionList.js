import Question from "../Question/Question";
import "./QuestionList.css";
const QuestionList = ({ children: questions }) => {
  return (
    <ul className="test-question-list">
      {questions.map((question, i) => {
        return (
          <Question key={i} i={i}>
            {question}
          </Question>
        );
      })}
    </ul>
  );
};

export default QuestionList;
