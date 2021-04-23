import AnswerContainer from "../Answer/AnswerContainer";
import "./AnswerList.css";

const AnswerList = ({ children, i }) => {
  return (
    <ul className="answer-list">
      {children.map((answer, j) => {
        return (
          <AnswerContainer key={j} i={i} j={j}>
            {answer}
          </AnswerContainer>
        );
      })}
    </ul>
  );
};

export default AnswerList;
