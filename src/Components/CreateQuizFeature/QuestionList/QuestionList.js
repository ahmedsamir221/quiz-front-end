import QuestionContainer from "../Question/QuestionContainer";
import "./QuestionList.css";
const QuestionList = ({ questions }) => {
  //console.log(questions)
  return (
    <ul className="list">
      {questions.map((question, i) => {
        return (
          <QuestionContainer key={i} i={i}>
            {question}
          </QuestionContainer>
        );
      })}
    </ul>
  );
};

export default QuestionList;
