import AnswerContainer from "../Answer/AnswerContainer";
import "./AnswerList.css";
const AnswerList = ({ children: answers, i }) => {
  return (
    <ul className="test-answer-list">
      {answers.map((answer, j) => {
        return (
          <AnswerContainer i={i} j={j} key={j}>
            {answer}
          </AnswerContainer>
        );
      })}
    </ul>
  );
};

export default AnswerList;
